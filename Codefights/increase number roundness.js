function increaseNumberRoundness(n) {
	console.log(n)
	let num = String(n).split('').reverse().map(n => Number(n));
	
	for(let i = 0; i < num.length - 1; i++) {
		// console.log(num[i])
		if(num[i + 1] === 0 && num[i] > 0) {
			console.log(i, num[i], num[i+1])
			return true;
		}
	}
	return false;
}

// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

// Example

// For n = 902200100, the output should be
// increaseNumberRoundness(n) = true.

// One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

// For instance, one may swap the leftmost 0 with 1.

let n = 11000;//, the output should be
console.log(increaseNumberRoundness(n));// = false.

n = 234230;//, the output should be
console.log(increaseNumberRoundness(n));// = false.

// Roundness of n is 3, and there is no way to increase it.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 100 ≤ n ≤ 109.

