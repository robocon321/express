var db = require("../db.js");

module.exports.getLogin = function(req, res, next) {
	if(req.cookies.email){
		next();
		return;
	}
    res.render("../views/login.pug");
}
module.exports.postLogin = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({ email: email }).value();
    var errors = [];
    if (!user) {
        errors.push("No exist this email");
        res.render('../views/login.pug', {
            errors: errors
        });
        return;
    }
    if (user.password != password) {
        errors.push("Password incorrect");
        res.render('../views/login.pug', {
            errors: errors
        });
        return;
    }
   	res.cookie("email",email);
   	res.cookie("password",password);
    res.redirect("/users");
}