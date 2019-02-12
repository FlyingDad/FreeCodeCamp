function rounders(n) {
	let roundedNum = 0;
	let numLength = String(n).length;

	for(let i = 0; i < numLength - 1; i++) {
		if()
		console.log(n % 10)
	}

	// console.log(numLength)

}

// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

// Example

let n = 15;//, the output should be
console.log(rounders(n));// = 20;

 n = 1234;//, the output should be
console.log(rounders(n));// = 1000.

// 1234 -> 1230 -> 1200 -> 1000.

 n = 1445;//, the output should be
console.log(rounders(n));// = 2000.

// 1445 -> 1450 -> 1500 -> 2000.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ value ≤ 108.

