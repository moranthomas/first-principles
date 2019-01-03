var http = require("http");
http.createServer(function (request, response) {
//request.on("endnction () {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('HelloP!');
//});
}).listen(8080);
