var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {

    try {

        var usuario = req.body.usuario;
        var password = req.body.password;


        console.log(req.body);

        var data = await usuariosModel.getUserAndPassword (usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

                        
            res.redirect('/admin');
        } else {
            res.render('admin/login',{
                layout: 'admin/layout',
                error: true
            })
        } //cierro else
    } catch (error) {
        console.log(error)
    }
}) //cierra el post

router.get('/logout', function(req,res,next){
    req.session.destroy()
    res.redirect('/')
})
module.exports = router;
