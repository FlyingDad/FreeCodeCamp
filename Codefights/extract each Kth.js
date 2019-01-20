function extractEachKth(inputArray, k) {
	let newArr = [];
	for(let i = 1; i <= inputArray.length; i++) {
		console.log(i % k)
		if(i % k != 0) {
			newArr.push(inputArray[i - 1]);
		}
	}
	return newArr
}

// Given array of integers, remove each kth element from it.

// Example

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//
let k = 3 //, the output should be
console.log(extractEachKth(inputArray, k))// = [1, 2, 4, 5, 7, 8, 10]