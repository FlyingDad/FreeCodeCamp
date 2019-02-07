function secondRightmostZeroBit(n) {
  return (function(){
			let arr = n.toString(2).split('').reverse();
			let count = 0;
			answer = 0;
			for (let i = 0; i < arr.length; i++){
				if(arr[i] == 0){
					count++
				}
				if(count == 2) {
					answer = i;
					break;
				}
			}
			return Math.pow(2, answer);
  })();
}
// Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit.

// Example

let n = 37;//, the output should be
console.log(secondRightmostZeroBit(n));// = 8.

// 37 = 100101. The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of n.
// Thus, the answer is 23 = 8.

n= 1073741824;
console.log(secondRightmostZeroBit(n));