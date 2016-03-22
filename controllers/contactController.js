var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: realestateprueba@gmail.com,    // your email here
    pass: realEstate1        // your password here
  }
});

exports.send = function(req,res){
  var htmlContent = '<p>Name: ' + req.body.name + '</p>' +
                    '<p>Email: ' + req.body.email + '</p>' +
                    '<p>Message: ' + req.body.message + '</p>';
  var mailOptions = {
    to: 'realestateprueba@gmail.com',                  // your email here
    subject: 'Nuevo mensaje para contactar',
    from: req.body.name + ' <' + req.body.email + '>',
    sender: req.body.email,
    html: htmlContent
  };
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    }else{
      console.log('Message sent: ' + info.response);
      return res.json(201, info);
    }
  });
}
