const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{

	res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
	const reqUrl = req.url;
	const formVal = url.parse(reqUrl,true).query;
	console.log(formVal.userName,formVal.userPwd);
	res.end("用户名:"+formVal.userName+"----->"+"密码:"+formVal.userPwd);
})

server.listen(8080);