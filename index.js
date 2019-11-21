var express=require('express');
var app= express();
var port =3000;

app.get('',function(req,res){
	res.send("<h1>Hello world</h1>");
});

app.get('/users',function(req,res){
	res.send("This is user list");
});

app.listen(port,function(){
	console.log("My port have just been opened success...");
});