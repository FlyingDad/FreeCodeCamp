function firstReverseTry(arr) {
	if (arr.length === 0) {
		return [];
	}
	const temp = arr[arr.length - 1]
	arr[arr.length - 1] = arr[0];
	arr[0] = temp;
	console.log(arr)

}

// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

// Example

let arr = [1, 2, 3, 4, 5];//, the output should be
console.log(firstReverseTry(arr));// = [5, 2, 3, 4, 1].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer arr

// Guaranteed constraints:
// 0 ≤ arr.length ≤ 50,
// -104 ≤ arr[i] ≤ 104.

