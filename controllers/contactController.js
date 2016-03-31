var contactMe = require('../schemas/contactMe');

exports.sendMessage = {
  auth: {
    mode: 'try',
    strategy: 'session'
  },
  handler: function(request, reply){
    console.log(request);
    var newMessage = new contactMe ({
      name : request.payload.name,
      email : request.payload.email,
      number : request.payload.number,
      message : request.payload.message,
      state: request.payload.state
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

exports.updateMessage = {
  handler: function(request, reply){
          contactMe.findOne({_id:request.payload._id},function(err,item) {
          item.message = request.payload.message;
          item.state = "Revisado";
          item.email = request.payload.email;
          item.number = request.payload.number;
          item.save();
          return  reply(item);
    });
    console.log(request+ "aqui entro backend");

    }
  }
