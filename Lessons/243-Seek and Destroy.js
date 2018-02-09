// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	// Remove all the values
	var argArr = arr.slice.call(arguments);
	var newArr = argArr.shift();
	var strippedArr = []
	for (var i = 0; i < argArr.length; i++){
		//console.log("newarr: " + newArr);
		newArr.forEach(function(el, index) {
			
			//console.log(el, argArr[i], index);
			if(el != argArr[i]){
				strippedArr.push(newArr[index]);
			}
			
		});
		//console.log('stripped: ' + strippedArr);
		newArr = strippedArr;
		strippedArr = [];
	}
	return newArr;
  }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //[1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //[1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); //[]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //["hamburger"]