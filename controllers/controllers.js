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

module.exports.create_get=function(req,res){
	res.render('users/create');
};

module.exports.create_post=function(req,res){
	var errors=[];
	var values=[req.body.name,req.body.phone];
	if(req.body.name==""){
		errors.push("Name is empty");
	}
	if(req.body.phone==""){
		errors.push("Phone is empty");
	}
	if(errors.length){
		console.log(values);
		res.render("users/create",{
			errors:errors,
			values:values
		});
		return ;
	}
	db.get('users').push({id:shortid.generate(),name:req.body.name,phone:req.body.phone}).write();
	res.redirect('/users');
};