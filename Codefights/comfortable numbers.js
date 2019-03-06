const reducer = (accumulator, currentValue) => accumulator + currentValue;


function comfortableNumbers(l, r) {
	// let arr = [...Array(5).keys()];
	let values = [];

	for(let i = l; i <= r; i++) {
		let digitSum = String(i).split('').map(e => Number(e));

		const length = (i + digitSum.reduce(reducer)) - (i - digitSum.reduce(reducer)) + 1;
		let arr = Array(length).fill(i - digitSum.reduce(reducer)).map((e, index) => e + index)
		values.push(arr);
		
		// console.log(i, values)
	}
	return values
}


// Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

// How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?

// Example

let l = 10,  r = 12;//, the output should be
console.log(comfortableNumbers(l, r));// = 2.

// Here are all values of s(x) to consider:

// s(10) = 1, so 10 is comfortable with 9 and 11;
// s(11) = 2, so 11 is comfortable with 9, 10, 12 and 13;
// s(12) = 3, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.
// Thus, there are 2 pairs of numbers comfortable with each other within the segment [10; 12]: (10, 11) and (11, 12).

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer l

// Guaranteed constraints:
// 1 ≤ l ≤ r ≤ 1000.

// [input] integer r

// Guaranteed constraints:
// 1 ≤ l ≤ r ≤ 1000.

