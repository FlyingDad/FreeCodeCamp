// function arrayMaxConsecutiveSum(inputArray, k) {
// 	let maxSum = 0;

// 	for (let i = 0; i <= inputArray.length - k; i++) {
// 		let sum = 0;
// 		for (let j = 0; j < k; j++) {
// 			console.log(i, j, inputArray[i + j]);
// 			sum += inputArray[i + j];
// 		}
// 		if (sum > maxSum) {
// 			maxSum = sum;
// 		}
// 		console.log('---');
// 	}

// 	return maxSum;
// }

function arrayMaxConsecutiveSum(inputArray, k) {
	var maxSum = 0;
	var currentSum = 0;
	for (var i = 0; i < inputArray.length; i++) {
		if (i == 0) {
			for (var j = 0; j < k; j++) {
				currentSum += inputArray[i + j];
			}
			maxSum = currentSum;
		}
		if (i + k < inputArray.length) {
			console.log(currentSum,  inputArray[i], inputArray[i + k])
			currentSum = currentSum - inputArray[i] + inputArray[i + k];
			if (currentSum > maxSum) {
				maxSum = currentSum;
			}
		}
	}
	return maxSum;
}


// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

let inputArray = [2, 3, 5, 1, 6];
let k = 2; // the output should be
console.log(arrayMaxConsecutiveSum(inputArray, k)); // = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

inputArray = [1, 3, 2, 4];
k = 3;
console.log(arrayMaxConsecutiveSum(inputArray, k)); // = 9

// function arrayMaxConsecutiveSum(inputArray, k) {
// 	var maxSum = 0;
// 	var currentSum = 0;
// 	for (var i = 0; i < inputArray.length; i++) {
// 		if (i == 0) {
// 			for (var j = 0; j < k; j++) {
// 				currentSum += inputArray[i + j];
// 			}
// 			maxSum = currentSum;
// 		}
// 		if (i + k < inputArray.length) {
// 			currentSum = currentSum - inputArray[i] + inputArray[i + k];
// 			if (currentSum > maxSum) {
// 				maxSum = currentSum;
// 			}
// 		}
// 	}
// 	return maxSum;
// }
