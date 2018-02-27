function smallestCommons(arr) {
	var num1 = arr[0];
	var num2 = arr[1];

	while(num1 % num2 !== 0){
		num1 *= num1;
		num2 *= num2;
	}
	return num1;
}

console.log(smallestCommons([1, 5]));// should return 60.
console.log(smallestCommons([5, 1]));// should return 60.
//console.log(smallestCommons([1, 13]));// should return 360360.
//console.log(smallestCommons([23, 18]));// should return 6056820.


// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.