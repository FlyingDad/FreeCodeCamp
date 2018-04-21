function pairwise(arr, arg) {
	
	var indexSum = 0;
	
	var arrCopy = arr.slice();
	// looping from first element
	for (i = 0; i < arrCopy.length; i++) {
		//Looping from second element by setting first element  constant
		for (j = i + 1; j < arrCopy.length; j++) {
			// Check whether the sum is equal to arg
			if (arrCopy[i] + arrCopy[j] == arg) {
				indexSum += i + j;
				arrCopy[i] = NaN;
				arrCopy[j] = NaN;
			}
		}
	}
	return indexSum;
}


console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); //11
console.log(pairwise([1, 3, 2, 4], 4)); //1
console.log(pairwise([1, 1, 1], 2)); // 1
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); //10
// console.log(pairwise([], 100)); // 0

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.