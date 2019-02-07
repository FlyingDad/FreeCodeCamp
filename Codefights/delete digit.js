function deleteDigit(n) {
	let arr = String(n).split('');
	let max = 0;

	for(let i = 0; i < arr.length; i++){
		let newNum = arr.slice()
		newNum.splice(i, 1)
		let num = newNum.join('');
		if(num > max) {
			max = num;
		}
	}

	return Number(max);
}

// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

let  n = 152;//, the output should be
console.log(deleteDigit(n));// = 52;
n = 1001;//, the output should be
console.log(deleteDigit(n));// = 101.