var express = require('express');
var app = express();
var port = 3000;
var cookieParser=require("cookie-parser");
var bodyParser=require('body-parser');
var userRoute=require("./routes/users.js");
var db=require("./db.js");
var controllers=require("./controllers/controllers.js");
var auth=require('./routes/auth.js');
var login=require("./controllers/login.js");
var dotenv=require('dotenv').config();

app.use(cookieParser(process.env.DB_PASS));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users',userRoute);
app.use('/auth',auth);
app.use(express.static('public'));

app.set("view engine", 'pug');
app.set("views", "./views");

app.get('/', login.getLogin, function(req, res) {
    res.send("<h1>Hello world</h1><a href='header'>Header</a><br/><a href='/users'>User</a>");
});

app.get('/view/:id', login.getLogin, function(req,res){
	var id=req.params.id;
	var user=db.get('users').find({id:id}).value();
	res.render("./view",{user:user});
});

app.listen(port, function() {
    console.log("My port have just been opened success...");
});