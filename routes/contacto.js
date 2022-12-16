var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto:true
  }); //llamar a contacto.hbs
});

router.post('/', async(req, res, next) => {
    console.log(req.body);
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var mensaje = req.body.comentario; 

    var obj ={
      to: 'ramirezpmaria13@gmail.com',
      subject: 'Contacto desde Dulce Tentación MP',
      html: nombre + ' se contacto desde la Wed de Dulce Tentación y quiere más info a este correo ' + email  + ',.<br> Realizo el siguiente comentario ' + mensaje   + '.<br/> Su Tel es:   ' + tel + '.'
    }

    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: process.env.SMTP_PORT, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS
      }
    });//cierro el sitio

    var info = await transport.sendMail(obj);

    res.render('contacto',{
       isContacto:true,
       message : "Mensaje enviado correctamente"
    });
    
});

module.exports = router;