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
      var tempScope = request.params.scope;
      var newUser;


      if (tempScope === "admin") {
        newUser = new user({
          username : request.payload.username,
          password : SHA3(request.payload.password),
          code: request.payload.code,
          name : null,
          cell : null,
          phone : null,
          address : null,
          email : null,
          scope : request.payload.scope
        });
      }else {
        newUser = new user({
          username : request.payload.username,
          password : SHA3(request.payload.password),
          code: request.payload.code,
          name : request.payload.name,
          cell : request.payload.cell,
          phone : request.payload.phone,
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



exports.updateUser = {
  handler: function(request, reply){
    var tempScope = request.payload.scope;
          user.findOne({_id:request.payload.codigo._id},function(err,usuario) {
          usuario.username = request.payload.codigo.username;
          usuario.password = SHA3(request.payload.codigo.password);
          usuario.code = request.payload.codigo.code;
          usuario.name = request.payload.codigo.name;
          usuario.cell = request.payload.codigo.cell;
          usuario.phone = request.payload.codigo.phone;
          usuario.address = request.payload.codigo.address;
          usuario.email = request.payload.codigo.email;
          usuario.scope = request.payload.codigo.scope;
          usuario.save();
          return  reply(usuario);
    });
    }
  };
  exports.deleteUser = {
    handler: function(request, reply){
      var users = user.findByIdAndRemove(encodeURIComponent(request.params.userId), function(err){
        if(err){
          console.log(err);
          reply("error removing")
        }
        return  reply('User deleted');
      });
    }
};
