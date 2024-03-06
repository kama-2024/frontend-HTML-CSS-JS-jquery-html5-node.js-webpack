const http = require("http");
const querystring = require("querystring");
const mysql = require("mysql");
const server = http.createServer((req,res)=>{

	if(req.url!='/favicon.ico'){
	}
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
				user:'root',
				password:"root123",
				database:"demo1"
			})
			connection.connect();
			connection.query('insert into user value (?,?,?)',[0,userName,userPwd],(err,results,fields)=>{
				if(err) throw err;
				res.write("注册成功！！！");
				res.end();
			})
			connection.end();
		})
	}

})

server.listen(8080);