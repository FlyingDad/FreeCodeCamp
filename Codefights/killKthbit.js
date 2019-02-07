function killKthBit(n, k) {
	let base2Arr = (n.toString(2)).split('').reverse();
	base2Arr.splice(k - 1, 1, '0');
	let base2 =  base2Arr.reverse().join('');
  return parseInt(base2, 2);
}

// n order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

// You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

// Example

let n = 8, k = 3;//, the output should be
console.log(killKthBit(n, k));// 


n = 37, k = 3;//, the output should be
console.log(killKthBit(n, k));// = 33.

// 37= 100101 ~> 100001 = 33.

n = 37, k = 4;//, the output should be
console.log(killKthBit(n, k));// = 37.

// The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.

n = 2147483647, k = 16;
console.log(killKthBit(n, k));// = 2147450879 = 
//1111111111111110111111111111111.
//1111111111111111011111111111111