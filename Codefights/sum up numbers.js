function sumUpNumbers(inputString) {
	let re = /[0-9]+/g
	let result = inputString.match(re)
	if(result){
		return result.map(n => Number(n)).reduce((a,b) => a+b);
	}
	return 0;
}

// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

// Example

let inputString = "2 apples, 12 oranges";//, the output should be
console.log(sumUpNumbers(inputString));// = 14.
inputString = "testnull";//, the output should be
console.log(sumUpNumbers(inputString));// = 14.

