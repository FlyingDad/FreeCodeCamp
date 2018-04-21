// var argsArr = process.argv;
// //console.log(argsArr.length);
// var sum = 0;
// for (var i =2; i < argsArr.length; i++){
// 	sum += +argsArr[i];
// }
// console.log(sum);

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
var findFiles = require('./findfiles.js');
var result = findFiles.findFiles('./','txt');
console.log("results:" + result);
