const mysql = require("mysql");

const connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root123",
	database:"demo1"
})

connection.connect();

connection.query('select * from user',(err,results,fields)=>{
	if(err) throw err;
	console.log(results);
})

connection.end();

