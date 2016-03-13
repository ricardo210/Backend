var employee = require('../schemas/employee');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createEmployee = {
    handler: function(request, reply) {
      console.log(request.payload);
       var newEmployee = new employee({
         username : request.payload.username,
         password : SHA3(request.payload.password),
         scope : request.payload.scope
       });
       newEmployee.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  }

  exports.getEmployee = {
    handler: function(request, reply){
      var worker = employee.find({});
      reply(worker);
    }
  };
