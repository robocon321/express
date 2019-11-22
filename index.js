var express = require('express');
var app = express();
var port = 3000;
var bodyParser=require('body-parser');
var users=[
            { id: 1, name: "Wing" },
            { id: 2, name: "Hong 10" },
            { id: 3, name: "Victor" },
            { id: 4, name: "Skim" }
        ];

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
	console.log(userMatchs);
	res.render('users/index.pug',{
		users:userMatchs
	});
});

app.get('/users/create',function(req,res){
	res.render('users/create',{

	});
})

app.post('/users/create',function(req,res){
	var id_next=users.length+1;
	console.log(id_next);
	users.push({id:id_next,name:req.body.name});
	res.redirect('/users');
})

app.listen(port, function() {
    console.log("My port have just been opened success...");
});