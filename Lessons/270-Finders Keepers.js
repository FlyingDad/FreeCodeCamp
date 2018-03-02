function findElement(arr, func) {
	var num = 0;
	num = arr.filter(func);
	return num[0];
}


console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));// should return 8.
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));// should return undefined.

//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).