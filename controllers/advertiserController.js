var advertiser = require('../schemas/advertiser');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createAdvertiser = {
    handler: function(request, reply) {
      console.log(request.payload);
       var newAdvertiser = new advertiser({
         username : request.payload.username,
         password : SHA3(request.payload.password),
         scope : request.payload.scope
       });
       newAdvertiser.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  }

  exports.getAdvertiser = {
    handler: function(request, reply){
      var advert = advertiser.find({});
      reply(advert);
    }
  };
