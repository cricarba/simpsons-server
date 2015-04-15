var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./simpsons.db');

db.run("CREATE TABLE characters (name varchar, age number, hairColor varchar);");
