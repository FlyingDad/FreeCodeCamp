function isPower(n) {
	for (let i = 2; i < n; i++) {
		for (let j = 2; j < 9; j++) {
			let pow = Math.pow(i, j);
			if (pow == n) {
				return true;
			}
		}
	}
	return false;
}

// Determine if the given number is a power of some non-negative integer.

// Example

let n = 125; //, the output should be
console.log(isPower(n)); // = true;
n = 100; //, the output should be
console.log(isPower(n)); // = false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 400.
