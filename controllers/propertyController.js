var property = require('../schemas/Property');
var boom = require('boom');

exports.createProperty = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      var newProperty= new property({
          name : request.payload.name,
          address : request.payload.address,
          type : request.payload.type,
          category : request.payload.category,
          advertiser: request.payload.advertiser,
          images : request.payload.images,
          available : true
        });
        
       newProperty.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('error' + err));
         }else{
           return reply('ok');
         };
      });
    }
  }

  exports.getProperty = {
  handler: function(request, reply){
    var Properties = property.find({});
    reply(Properties);
  }
};

exports.updateProperty = {
  handler: function(request, reply){
          property.findOne({id:request.payload.codigo.id},function(err,item) {
          item.name = request.payload.codigo.name;
          item.address = SHA3(request.payload.codigo.address);
          item.type = request.payload.codigo.type;
          item.category = request.payload.codigo.category;
          item.advertiser = request.payload.codigo.advertiser;
          item.images = request.payload.codigo.images;
          item.available = request.payload.codigo.available;
          item.save();
          return  reply(item);
    });
    }
  };


  exports.deleteProperty = {
    handler: function(request, reply){
      var properties = property.findByIdAndRemove(encodeURIComponent(request.params.propertyId), function(err){
        if(err){
          console.log(err);
          reply("error removing")
        }
        return  reply('Property deleted');
      });
    }
};
