var express = require('express');
var app = express();
var port = 3000;
var bodyParser=require('body-parser');

var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')

var adapter = new FileSync('db.json')
var db = low(adapter)

var shortid=require("shortid");

db.defaults({users:[]}).write();
var users=db.get('users').value();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", 'pug');
app.set("views", "./views");
app.get('', function(req, res) {
    res.send("<h1>Hello world</h1><a href='header'>Header</a><br/><a href='/users'>User</a>");
});

app.get('/header', function(req, res) {
    res.render('index', {
        name: "Robocon321#"
    });
});

app.get('/users', function(req, res) {
    res.render('users/index.pug', {
        users: users
    })
});

app.get('/users/search',function(req,res){
	var q=req.query.q;
	var userMatchs=users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase())>=0;
	});
	res.render('users/index.pug',{
		users:userMatchs
	});
});

app.get('/users/create',function(req,res){
	res.render('users/create');
});

app.post('/users/create',function(req,res){
	db.get('users').push({id:shortid.generate(),name:req.body.name}).write();
	users=db.get("users").value();
	res.redirect('/users');
})

app.get('/view/:id',function(req,res){
	var id=req.params.id;
	var user=db.get('users').find({id:id}).value();
	console.log(user);
	res.render("../view",{user:user});
})

app.listen(port, function() {
    console.log("My port have just been opened success...");
});