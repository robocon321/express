var express = require('express');
var router = express.Router();
var db=require("../db.js");
var users=db.get('users').value();
var controllers=require('../controllers/controllers.js');

/* GET users listing. */
router.get('/', controllers.index);

router.get('/search',controllers.search);

router.get('/create',controllers.create_get);

router.post('/create',controllers.create_post);


module.exports = router;
