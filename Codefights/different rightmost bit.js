function differentRightmostBit(n, m) {
  return (function() {
		let xor = n ^ m;
		let binaryStr = xor.toString(2);
		console.log(xor, binaryStr)
		let counter = 1;
		for(let i = binaryStr.length - 1; i >= 0 ; i -- ) {
			if(binaryStr.charAt(i) == 1) {
				return counter;
			} else {
				counter *= 2;
			}
		}
	})() ;
}
// You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit (0-based).

// Example

let n = 11, m = 13;//, the output should be
console.log(differentRightmostBit(n, m));//= 2.

// 11 = 1011, 13 = 1101, the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
// So the answer is 2^1 = 2.

n = 7, m = 23;//, the output should be
console.log(differentRightmostBit(n, m));// = 16.

// 7 = 111, 23 = 10111