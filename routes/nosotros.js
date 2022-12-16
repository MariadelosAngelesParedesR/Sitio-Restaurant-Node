var express = require('express');
var router = express.Router();
var {getNovedades} = require('../models/portafoliomodel')

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await getNovedades()
  res.render('nosotros',{
    isNosotros:true, 
    novedades
  });
});

module.exports = router;