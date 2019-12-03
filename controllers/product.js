var db=require('../db.js');

module.exports.index=function(req,res){
	var page = req.query.page;
	if(!page){
		page=1;
	}
	var per=20;
	var start = (page-1)*per;
	var end= page*per;
	var products=db.get('products').value().slice(start,end);
	res.render('../views/product.pug',{
		products:products,
		page:page,
	});
}
module.exports.addToCart=function(req,res){
	var idItem=req.params.id;
	var idUser=req.signedCookies.id;
	if(!db.get("sessions").find({id:idUser}).value()){
		db.get("sessions").push({id:idUser}).write();
	}
	var count=db.get('sessions').find({id:idUser}).get('cart.'+idItem,0).value();
	db.get("sessions").find({id:idUser}).set('cart.'+idItem,count+1).write();
	res.redirect("/product");
}