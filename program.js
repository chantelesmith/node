var fs = require('fs');
var ext;
var fsplit;
var fext;
var list;



// fs.readFile(process.argv[2], function (err, data) {
//     if (err) return console.error(err);
//      console.log(data.toString().split('\n').length - 1);
// });


fs.readdir(process.argv[2], function(err, list){
	list.forEach(function(file){
		if (path.extname(file) === '.' + process.argv[3])
			console.log(file)
	});
	 
	
});