function firstDigit(inputString) {
	let regex = /[0-9]/
	let match = inputString.match(regex);
	return match[0];
}

// Find the leftmost digit that occurs in a given string.

// Example

let inputString = "var_1__Int"//, the output should be
console.log(firstDigit(inputString))// = '1';
inputString = "q2q-q"//, the output should be
console.log(firstDigit(inputString))// = '2';
inputString = "0ss"//, the output should be
console.log(firstDigit(inputString))// = '0'.