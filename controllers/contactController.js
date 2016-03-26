var contactMe = require('../schemas/contactMe');

exports.sendMessage = {
  auth: {
    mode: 'try',
    strategy: 'session'
  },
  handler: function(request, reply){
    var newMessage = new contactMe ({
      name : request.payload.nameMessage,
      email : request.payload.emailMessage,
      number : request.payload.numberMessage,
      message : request.payload.messageMessage,
      state: "No leído"
    });
    newMessage.save();
    console.log('message send');
    return reply('ok');
  }
}

exports.getMessage = {
  auth: {
    mode: 'required',
    strategy: 'session',
    scope: ['employee']
  },
  handler: function(request,reply){
    var messages = contactMe.find({});
    reply(messages);
  }
}
