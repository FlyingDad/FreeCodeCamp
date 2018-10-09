/* jshint esversion: 6 */

function isLucky(n) {
	const numString = n.toString();
	if(numString.length % 2 != 0){
		return false;
	} else {
		const halfLength = numString.length / 2;
		const firstHalf = numString.slice(0, halfLength).toString().split('');
		const secondHalf = numString.slice(halfLength).toString().split('');
	  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
		const sum1 = firstHalf.reduce(reducer);
		const sum2 = secondHalf.reduce(reducer);
		if(sum1 === sum2){
			return true;
		} else {
			return false;
		}
	}
}


// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

console.log(isLucky(1230));
console.log(isLucky(239017));