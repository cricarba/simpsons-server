var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./simpsons.db');


db.run("INSERT INTO characters (name, age, hairColor) VALUES ('bart', 10, 'orange');");
db.run("INSERT INTO characters (name, age, hairColor) VALUES ('homer', 40, 'none');");
db.run("INSERT INTO characters (name, age, hairColor) VALUES ('lisa', 8, 'yellow');");
db.run("INSERT INTO characters (name, age, hairColor) VALUES ('marge', 1, 'yellow');");
db.run("INSERT INTO characters (name, age, hairColor) VALUES ('ralph', 8, 'brown');");