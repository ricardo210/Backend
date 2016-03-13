var Admin = require('../schemas/admin');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createAdmin = {
    handler: function(request, reply) {
      console.log(request.payload);
       var newAdmin = new Admin({
         username : request.payload.username,
         password : SHA3(request.payload.password),
         scope : request.payload.scope
       });
       newAdmin.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
        }else{
           return reply('ok');
         };
      });
    }
  }

  exports.getAdmin = {
    handler: function(request, reply){
      var admins = Admin.find({});
      reply(admins);
    }
  };
