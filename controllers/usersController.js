var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createUser = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      console.log(request.payload);
      var tempScope = request.payload.scope;
      var newUser;


      if (tempScope =="admin") {
        newUser = new user({
          username : request.payload.username,
          password : SHA3(request.payload.password),
          code: request.payload.code,
          name : null,
          cell : null,
          address : null,
          email : null,
          scope : null,
        });
      }else {
        newUser = new user({
          username : request.payload.username,
          password : SHA3(request.payload.password),
          code: request.payload.code,
          name : request.payload.name,
          cell : request.payload.cell,
          address : request.payload.address,
          email : request.payload.email,
          scope : request.payload.scope,
        });
      }

       newUser.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  }

  exports.getUser = {
  handler: function(request, reply){
    var users = user.find({});
    reply(users);
  }
};
