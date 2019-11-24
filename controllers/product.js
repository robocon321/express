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
		page:page
	});
}