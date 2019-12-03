var express = require('express');
var router = express.Router();

var product=require('../controllers/product.js');
var login =require('../controllers/login.js');
/* GET home page. */
router.get('/',login.getLogin, product.index);
router.get('/cart/:id',login.getLogin, product.addToCart);

module.exports = router;