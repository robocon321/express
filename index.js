var express = require('express');
var app = express();
var port = 3000;
var bodyParser=require('body-parser');
var userRoute=require("./routes/users.js");
var db=require("./db.js");
var controllers=require("./controllers/controllers.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users',userRoute);

app.set("view engine", 'pug');
app.set("views", "./views");

app.get('/', function(req, res) {
    res.send("<h1>Hello world</h1><a href='header'>Header</a><br/><a href='/users'>User</a>");
});

app.get('/header', controllers.header);

app.get('/view/:id',function(req,res){
	var id=req.params.id;
	var user=db.get('users').find({id:id}).value();
	console.log(user);
	res.render("./view",{user:user});
})

app.listen(port, function() {
    console.log("My port have just been opened success...");
});
