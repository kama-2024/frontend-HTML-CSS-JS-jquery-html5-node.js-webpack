const http = require("http");
const querystring = require("querystring");
const mysql = require("mysql");
const server = http.createServer((req,res)=>{

	let postVal = "";
	req.on("data",(chunk)=>{
		postVal+=chunk;
	})
	req.on("end",()=>{
			
		let formVal = querystring.parse(postVal);
		let userName = formVal.userName;
		let userPwd = formVal.userPwd;
		

		const connection = mysql.createConnection({
			host:"localhost",
			user:"root",
			password:"root123",
			database:"demo1",
			port:3306
		})
		//数据库信息
		connection.connect();
		//连接数据库		
		connection.query("select * from user where userName=? and userPwd=?",[userName,userPwd],(err,results,fields)=>{
			if(err) throw err;
			if(results.length >0){
				res.writeHead(200,{'Content-Type':"text/html;charset=utf8"})
				res.write('登录成功')
				res.end();
			}
			
		})
		connection.end();
		
	})

})
server.listen(8080);