
var 
	http = require('http'),
	fs = require("fs"),
	path = require('path'),
	url = require ('url'),
	WEBROOT = '/public',
	FILEDEFAULT = WEBROOT + '/index.html',
	PORT = 8888;
	MIMETYPES = {'html': 'text/html', 'js': 'text/javascript', 'css': 'text/css', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'png': 'image/png',
    'pdf': 'application/pdf'};  //and so on...

	

//create server
http.createServer(function(request, response) {
	//return index.html on empty path or whatever requested out of WEBROOT
	var url_parts = url.parse(request.url);
	//console.log(url_parts);
	var fileName = url_parts.pathname;
	fileName = (fileName === '/') ? FILEDEFAULT : WEBROOT + fileName;
	fs.readFile(path.join(__dirname, fileName), function(err, content) {
			console.log(path.join(__dirname, fileName));
			if(err) {
				console.log(err);
				fs.readFile(path.join(__dirname, WEBROOT, '500.html'), function (err, page) {
					response.writeHead(500, {'Content-Type' : "text/html"});
					response.end('' + page);
				});
				return;
			}
			
			var extension, mimeType;
			extension = path.extname(fileName).substring(1);
			mimeType = (extension !== '') ? MIMETYPES[extension] : 'text/plain';
			response.writeHead(200, {'Content-Type' : (mimeType || 'application/octet-stream')});
			response.end(content);
			

	});

}).listen(PORT);

