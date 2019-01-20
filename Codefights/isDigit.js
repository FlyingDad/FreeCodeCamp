function isDigit(symbol) {

	return isNaN(symbol) ? false : true;
}


// Determine if the given character is a digit or not.

// Example

let symbol = '0'//, the output should be
console.log(isDigit(symbol))// = true;
symbol = '-'//, the output should be
console.log(isDigit(symbol))// = false.