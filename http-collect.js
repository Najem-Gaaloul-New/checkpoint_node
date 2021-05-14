var http = require("http");

var urlToGet = "http://faubourgsimone.paris/";
if (process.argv[2] !== undefined) {
	urlToGet = process.argv[2];
}


http.get(urlToGet, function(response) {



	response.setEncoding("utf8");

	var outPut = "";

	response.on("data", function(data) {
		
		outPut += data;
	});

	response.on("end", function() {
		var nbChars = outPut.toString().length;
		console.log(nbChars);
		console.log(outPut);
	});

	response.on("error", function(data) {
		console.error(data.toString());
	});

}).on('error', function(e) {
	console.error("Got error: " + e.message);
});
