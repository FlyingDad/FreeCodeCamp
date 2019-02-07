function swapAdjacentBits(n) {
  return (function() {
		let bin= n.toString(2)
		let twoBitArr = [];
		for(let i = bin.length - 1; i >= 0; i -= 2){
			let s = ''
			s += bin[i]
			s += bin[i - 1] || 0;
			twoBitArr.push(s)
		}
		let swapBin = twoBitArr.reverse().join('');
		return parseInt(swapBin, 2)
	})() ;
}

// You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.

// Example

let n = 13;//, the output should be
console.log(swapAdjacentBits(n));// = 14.

// 13 = 1101 ~> {11}{01} ~> 1110 = 14.

n = 74;//, the output should be
console.log(swapAdjacentBits(n));// = 133.

// 74 = 01001010 ~> {01}{00}{10}{10} ~> 10000101 = 133.
// Note the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.