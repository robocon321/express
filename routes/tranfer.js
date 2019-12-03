var express = require('express');
var router = express.Router();
var login=require('../controllers/login.js');
var tranfer=require("../controllers/tranfer.js");

router.post('/', login.getLogin, tranfer.postData);
router.get('', login.getLogin, tranfer.getData);

/* GET home page. */

module.exports = router;