var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  var result = "";
  request.setEncoding("utf8");
  request.on("data", function(data) {
    result += data;
  });
  request.on("end", function() {
    console.log(result.length);
    console.log(result);
  });
});

//collect data accross mutiple "data" events and append the results 
//prior to output

//node modules - node will look at core modules and then node modules
// a program that performs hht get request to a url
//collect all data from the server then writes two lines

// first - line integer represting number of characters received
// second - complete string of characters send from server

