const http = require("http");
const url = require("url");
const querystring = require('querystring');

const server = http.createServer((req,res)=>{

	const reqUrl = req.url;

	const queryUrl = url.parse(reqUrl).query;

	console.log(  querystring.parse(queryUrl)   );


	res.end();
})


server.listen(8080);