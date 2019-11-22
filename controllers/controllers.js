var db=require("../db.js");
var users=db.get('users').value();
var shortid=require("shortid");

module.exports.index=function(req, res) {
    res.render('users/index.pug', {
        users: users
    })
};
module.exports.search=function(req,res){
	var q=req.query.q;
	var userMatchs=users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase())>=0;
	});
	res.render('users/index.pug',{
		users:userMatchs
	});
};
module.exports.header=function(req,res){
	var q=req.query.q;
	var userMatchs=users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase())>=0;
	});
	res.render('users/index.pug',{
		users:userMatchs
	});
};
module.exports.create_get=function(req,res){
	res.render('users/create');
};
module.exports.create_post=function(req,res){
	db.get('users').push({id:shortid.generate(),name:req.body.name}).write();
	users=db.get("users").value();
	res.redirect('/');
};