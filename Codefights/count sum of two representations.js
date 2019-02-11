function countSumOfTwoRepresentations2(n, l, r) {
	
	let halywayPoint = n / 2;
	if(l == halywayPoint && r == halywayPoint) {
		return 1;
	}
	if(l > halywayPoint && r > halywayPoint) {
		return 0;
	}
	let num1 = Math.floor(n / 2) - l;
	let num2 = r - Math.floor(n / 2);
	// console.log(num1, num2)
	if(n % 2 == 1) {
		return num1 < num2 ? num1 : num2;
	} else {
		return num1 < num2 ? num1 + 1 : num2 + 1;
	}


	// let count = 0;
	// while(l < r){
		// for(let upper = r; upper >= l; upper--){
		// console.log(upper)
			// for(let lower = l; lower <= r; lower++){
				// console.log(lower, upper)
				// if(lower + upper == n && lower <= upper) {
					// console.log(lower, upper)
					count++
				// }
			// }
		// l++;
	// }

	// return count;
}

// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

// Example

let n = 6, l = 2,  r = 4;//, the output should be
console.log(countSumOfTwoRepresentations2(n, l, r))// = 2.

n = 93, l = 24,  r = 58;//, the output should be
console.log(countSumOfTwoRepresentations2(n, l, r))// = 12.
// There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

