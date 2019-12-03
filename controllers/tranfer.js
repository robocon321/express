 var db=require('../db.js');
module.exports.postData=function(req,res,next){
 	var userReceive=req.body.user;
 	var amount=parseInt(req.body.amount);
 	var userSend=req.signedCookies.id;
 	console.log(userReceive,amount,userSend);
 	db.get('tranfers').push({userSend:userSend,amount:amount,userReceive:userReceive}).write();
 	res.redirect('/tranfer');
}
module.exports.getData=function(req,res,next){
	res.render('../views/users/tranfer.pug',{
		csrfToken: req.csrfToken()
	});
}
