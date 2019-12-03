var express = require('express');
var router = express.Router();
var db=require("../db.js");
var users=db.get('users').value();
var controllers=require('../controllers/controllers.js');
var validate=require('../controllers/validate.js');
var login=require('../controllers/login.js');
var multer  = require('multer')
var upload = multer({ dest: './public/uploads' });

/* GET users listing. */
router.get('/', login.getLogin, controllers.index);

router.get('/search', login.getLogin, controllers.search);

router.get('/create', login.getLogin, controllers.create_get);

router.post('/create', upload.single('avatar'), login.getLogin ,validate.post, controllers.create_post);

module.exports = router;
