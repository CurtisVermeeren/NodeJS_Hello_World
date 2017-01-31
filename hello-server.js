// Load the http module
var http = require('http');

// Create a new HTTP server
// This createServer function takes a callback function which is run when a request is received
// request has information about the client's request, response is used to return data.
var server = http.createServer(function(request, response){
	// Write 200 to the http head. 200 is the status code for 'OK'
	// This serve specifies the Content-Type header
	response.writeHead(200, {"Content-Type": "text/html"});
	//Write to the HTML page Hello World!
	response.write(`<!DOCTYPE "html"><html><head><title>Hello World Page</title>`+
		`</head><body>Hello World!</body></html>`);
    // When we call end() we tell the serve the response headers and body have been sent.
	// End can also be used like write assuming only one call is needed.
	response.end();
});

var port = process.env.PORT || 8080;
server.listen(port);
console.log("Server is Listening");
