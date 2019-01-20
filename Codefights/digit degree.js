let count = 0;

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const reduceToSingleDigit = n => {
	if (n < 10) {
		return 0;
	}
	let nArr = String(n)
		.split('')
		.map(Number);
	count += 1;
	let result = nArr.reduce(reducer);
	console.log(result);
	if (result >= 10) {	
		console.log(n, result);
		reduceToSingleDigit(result);
	}
};

function digitDegree(n) {
	count = 0;
	reduceToSingleDigit(n);
	console.log('final ', count);
	return '---';
}

let n = 5; //, the output should be
console.log(digitDegree(n)); // = 0;
n = 100; //, the output should be
console.log(digitDegree(n)); // = 1.
// 1 + 0 + 0 = 1.
n = 91; //, the output should be
console.log(digitDegree(n)); // = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.
