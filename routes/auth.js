var express = require('express');
var router = express.Router();
var login=require("../controllers/login.js");

/* GET users listing. */
router.get("",login.getLogin);
router.post("",login.postLogin);

module.exports = router;
