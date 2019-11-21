var express = require('express');
var app = express();
var port = 3000;

app.set("view engine", 'pug');
app.set("views", "./views");
app.get('', function(req, res) {
    res.send("<h1>Hello world</h1><a href='header'>Header</a><a href='/users'>User</a>");
});

app.get('/header', function(req, res) {
    res.render('index', {
        name: "Robocon321#"
    });
});

app.get('/users', function(req, res) {
    res.render('users/index.pug', {
        names: [
            { id: 1, name: "Wing" },
            { id: 2, name: "Hong 10" },
            { id: 3, name: "Victor" },
            { id: 4, name: "Skim" }
        ]
    })
});

app.listen(port, function() {
    console.log("My port have just been opened success...");
});