// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.


function addTogether() {
	console.log(arguments.length);
	function sum() {
		//return(undefined);
		//if(!arguments) {return undefined;}
		// console.log("in the closure");
		//console.log("Args - " + arguments.length);
		var args = Array.from(arguments);
		args.forEach(function(arg){
			if(arg == NaN){
				console.log("NAN");
			}
		});
		return arguments;
	}
	
  return sum;
}

console.log(addTogether(2, 3));// should return 5.
console.log(addTogether(2)(3));// should return 5.
//console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.
//console.log(addTogether(2, "3"));// should return undefined.
//console.log(addTogether(2)([3]));// should return undefined.

