// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.


function addTogether() {
	// create array that slices arguments
	var argsArr = [].slice.call(arguments);
	// check if all parameters are numbers, else return undefined
	if(!argsArr.every(function(arg){
		return typeof arg === 'number';
	})){
		return undefined;
	}
	// if array has two values, add them and return the sum
	if(argsArr.length === 2){
		return argsArr[0] + argsArr[1];
	} else {
		//store first param
		var arg1 = argsArr[0];
		//store function that will take second prameter and call itself to add values
		var addAnother=function(arg2){
			return addTogether(arg1, arg2);
		};
		return addAnother;
		//return the value		
	}
}
console.log(addTogether(2, 3));// should return 5.
console.log(addTogether(2)(3));// should return 5.
console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.
console.log(addTogether(2, "3"));// should return undefined.
console.log(addTogether(2)([3]));// should return undefined.

