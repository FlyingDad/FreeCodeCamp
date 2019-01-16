function circleOfNumbers(n, firstNumber) {

	if(firstNumber < n / 2) {
		return n / 2 + firstNumber;
	} else {
		return n/2 + firstNumber - n
	}
	
}

let n = 10
let firstNumber = 2//, the output should be
console.log(circleOfNumbers(n, firstNumber))// = 7.
n = 10
firstNumber = 7//, the output should be
console.log(circleOfNumbers(n, firstNumber))// =2.

// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.