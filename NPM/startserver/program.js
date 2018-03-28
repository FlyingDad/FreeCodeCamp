// var argsArr = process.argv;
// //console.log(argsArr.length);
// var sum = 0;
// for (var i =2; i < argsArr.length; i++){
// 	sum += +argsArr[i];
// }
// console.log(sum);
var fs = require('fs');
// var text = fs.readFileSync(process.argv[2]).toString();
// //console.log(text);
// var split = text.split('\n');
// console.log(split.length - 1);
// fs.readFile(process.argv[2], function(err, data){
// 	if(err){
// 		coonsole.log(err);
// 	} else {
// 		//console.log(data);
// 		var split = data.toString().split('\n');
// 		console.log(split.length - 1);
// 	}
// });

fs.readdir(process.argv[2],function(err, data){
		if(err){
		//console.log(err);
	} else {
		//console.log(data);
		var filtered = data.filter(function(file){
			//console.log(file);
			return file.includes('.' + process.argv[3]);
		});
		//console.log(filtered);
		filtered.forEach(function(file){
		  console.log(file);
		});
	}
});