var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({users:[]},{sessions:[]},{tranfers:[]}).write();
var users=db.get('users').value();

module.exports = db;
