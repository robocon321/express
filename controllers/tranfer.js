 var db=require('../db.js');
module.exports.postData=function(req,res,next){
 	var userReceive=req.body.user;
 	var amount=req.body.amount;
 	var userSend=req.signedCookies.id;
 	db.get('tranfer').push({userSend:userSend,amount:amount,userSend:userSend}).write();
 	res.redirect('/tranfer');
}
module.exports.getData=function(req,res,next){
	res.render('../views/users/tranfer.pug');
}
