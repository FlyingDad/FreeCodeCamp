function equalPairOfBits(n, m) {
  return (function() {
    let xor = n ^ m;
		let binaryStr = xor.toString(2).padStart(32, '0');
		let counter = 1;
		for(let i = binaryStr.length - 1; i >= 0 ; i -- ) {
			if(binaryStr.charAt(i) == 0) {
				return counter;
			} else {
				counter *= 2;
			}
		}
		return 'broke'
	})() ;
}

// You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

// Return the value of 2position_of_the_found_pair (0-based).

// Example

let n = 10,m = 11;//, the output should be
console.log(equalPairOfBits(n, m));// = 2.

// 10 = 10, 1110 = 1011, the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
// So the answer is 2^1 = 2.

