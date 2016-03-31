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
          cell : request.payload.cell,
          phone : request.payload.phone,
          address : request.payload.address,
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
          propiedad.cell = request.payload.codigo.cell;
          propiedad.phone = request.payload.codigo.phone;
          propiedad.address = request.payload.codigo.address;
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
