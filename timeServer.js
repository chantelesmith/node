var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n };
// create server takes a callback
// returns an instance of your server

var server = net.createServer(function (socket){
	d = new Date();
	s = d.getFullYear() + "-"
		+ pad(d.getMonth() + 1) + "-"
		+ pad(d.getDate()) + " "
		+ pad(d.getHours()) + ":"
		+ pad(d.getMinutes()) + "\n";
	socket.end(s);

})


// start listening pn a partilcular port
server.listen(process.argv[2]);