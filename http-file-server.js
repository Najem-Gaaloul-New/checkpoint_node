
var http = require("http");
var fs = require("fs");



var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}
var fileLocation = "allo.txt";
if (process.argv[3] !== undefined) {
	fileLocation = process.argv[3];
}


var server = http.createServer(function(req, res) {

	
	var readStream = fs.createReadStream(fileLocation);

	
	readStream.on("open", function() {

		
		readStream.pipe(res);
	});

	
	readStream.on("error", function(err) {
		res.end(err.toString());
	});
});


server.listen(requestedPort);
