function isSumOfConsecutive2(n) {
	let halfway = Math.floor(n / 2);
	let count = 0;
	let startingSeq = 1;
	while(startingSeq <= halfway) {
		let sum = startingSeq;
		for(let i = startingSeq + 1; i <= halfway + 1; i++) {
			sum += i;
			console.log('sum ', sum)
			if(sum == n) {
				count++;
				break;
			}
			if(sum > n) {
				break;
			}
		}
		startingSeq++;
	}
	return count;
}

// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

// Example

let n = 9;// the output should be
console.log(isSumOfConsecutive2(n));// = 2.

//There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

n = 8;//,the output should be
console.log(isSumOfConsecutive2(n));// = 0.

// There are no ways to represent n = 8.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 25.