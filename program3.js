var http = require('http'); //http modeule

var url = process.argv[2];

http.get(url, function(request) { //http.get shortcut for simple GET requests
  request.setEncoding("utf8"); //using UT8 produces strings instead of buffer values
  request.on("data", function(data) {
    console.log(data);
  });
});