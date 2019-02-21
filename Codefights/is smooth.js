function isSmooth(arr) {

	if(arr[0] != arr[arr.length - 1] || arr.length < 2) {
		return false;
	}

	if(arr.length % 2 == 0) {
		const middleIndex = arr.length / 2;
		const middleSum = arr[middleIndex - 1] + arr[middleIndex]
		return middleSum == arr[0] ? true : false;
	} else {
		const middleIndex = Math.floor(arr.length / 2)
		return arr[0] == arr[middleIndex] ? true : false;
	}
}


// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.

// Example

let arr = [7, 2, 2, 5, 10, 7];//, the output should be
console.log(isSmooth(arr));// = true.

// The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.

arr = [-5, -5, 10];//, the output should be
console.log(isSmooth(arr));// = false.

// The first and middle elements are equal to -5, but the last element equals 10. Thus, arr is not smooth and the output is false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer arr

// The given array.

// Guaranteed constraints:
// 2 ≤ arr.length ≤ 105,
// -109 ≤ arr[i] ≤ 109.