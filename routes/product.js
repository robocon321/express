var express = require('express');
var router = express.Router();

var product=require('../controllers/product.js');
/* GET home page. */
router.get('/',product.index);

module.exports = router;