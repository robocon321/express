module.exports.post=function(req,res,next){
	var errors=[];
	var values=[req.body.name,req.body.phone];
	if(req.body.name==""){
		errors.push("Name is empty");
	}
	if(req.body.phone==""){
		errors.push("Phone is empty");
	}
	console.log(errors);
	console.log(values);
	if(errors.length){
		res.render("users/create",{
			errors:errors,
			values:values
		});
		return ;
	}
	next();
}