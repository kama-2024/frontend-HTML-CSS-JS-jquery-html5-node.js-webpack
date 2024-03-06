const http = require('http');

const server = http.createServer((req,res)=>{
	res.write("1111");
	res.end();
})

server.listen(8080);