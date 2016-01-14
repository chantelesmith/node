var http = require('http');
var map = require('through2-map');

uc = map(function(chunk){
	return chunk.toString().toUpperCase();
});

server = http.createServer(function(req, res){
	if (req.method == 'POST') {
		req.pipe(uc).pipe(res);
	}
});
server.listen(process.argv[2]);