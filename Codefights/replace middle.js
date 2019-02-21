function replaceMiddle(arr) {
	if(arr.length % 2 == 0) {
		const middleIndex = arr.length / 2;
		const middleSum = arr[middleIndex - 1] + arr[middleIndex]
		arr[middleIndex - 1] = middleSum;
		arr.splice(middleIndex, 1);
		return arr;
	} else {
		return arr;
	}
}
// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

// Example

let arr = [7, 2, 2, 5, 10, 7];//, the output should be
console.log(replaceMiddle(arr));// = [7, 2, 7, 10, 7].

// The middle consists of two elements, 2 and 5. These two elements should be replaced with their sum, i.e. 7.

arr = [2, 8];//, the output should be
console.log(replaceMiddle(arr));// = [-5, -5, 10].

// The middle is defined as a single element -5, so the initial array with no changes should be returned.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer arr

// The given array.

// Guaranteed constraints:
// 2 ≤ arr.length ≤ 104,
// -103 ≤ arr[i] ≤ 103.

