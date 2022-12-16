var express = require('express');
const { request } = require('../../app');
var router = express.Router();
//model
var { getNovedades, getPortafolioBayId, PortafolioNew, Portafolioupdate, Portafoliodelete } = require('../../models/portafoliomodel')


/* GET home page. */
router.get('/', async function (req, res, next) {
    var rows = await getNovedades()
    res.render('admin/nosotros', {
        layout: 'admin/layout',
        novedades: rows,
        nombre: req.session.nombre
    });
});

router.get('/nuevo', function (req, res, next) {
    res.render('admin/nuevo', {
        layout: 'admin/layout'
    })

});

router.post('/nuevo', async function (req, res, next) {
    //console.log(req.body);//
    if (req.body.titulo == '' || req.body.subtitulo == '' || req.body.noticia == '') {
        res.render('admin/nuevo', {
            layout: 'admin/layout', error: true
        })
    }
    try {
        var resol = await PortafolioNew(req.body)
        res.redirect('/admin')


    } catch (error) {
        console.log(error);
    }
})

router.get('/eliminar/:id', async function (req, res, next) {
    var id = req.params.id
    //console.log(id);
    try {
        var resol = await Portafoliodelete(id)
        res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
})

router.get('/editar/:id', async function (req, res, next) {
    var id = req.params.id

    var novedad = await getPortafolioBayId(id)

    res.render('admin/editar', {
        layout: 'admin/layout',
        novedad
    })
})

router.post('/editar/:id', async function (req, res, next) {
    var id = req.params.id
    //console.log(id);

    if (req.body.titulo == '' || req.body.subtitulo == '' || req.body.noticia == '') {
        var novedad = await getPortafolioBayId(id)

        res.render('admin/editar', {
            layout: 'admin/layout',
            novedad, error: true
        })
    }



    var obj = {
        titulo: req.body.titulo, subtitulo: req.body.subtitulo, noticia: req.body.noticia
    }

    try {
        var resul = await Portafolioupdate(
            obj, id)
        res.redirect('/admin')

    } catch (error) {
        console.log(error)
    }
})






module.exports = router;
