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
          property.findOne({_id:request.payload.codigo._id},function(err,propiedad) {
          propiedad.name = request.payload.codigo.name;
          propiedad.address = request.payload.codigo.address;
          propiedad.type = request.payload.codigo.type;
          propiedad.category = request.payload.codigo.category;
          propiedad.advertiser = request.payload.codigo.advertiser;
          propiedad.images = request.payload.codigo.images;
          propiedad.available = request.payload.codigo.available;
          propiedad.save();
          return  reply(propiedad);
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
