const http = require('http');

http.createServer(function (req, res){
	res.write("On the way to FF");
	res.end();

}).listen(3000)

console.log("Server started at 3000")
