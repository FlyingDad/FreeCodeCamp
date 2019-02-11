const factorial = n => {
	if(n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

function leastFactorial(n) {
	
	let fac = 0;
	let counter = 1;
	while(fac < n) {
		fac = factorial(counter);
		counter++;
	}
	return fac;
}


let n = 17;//, the output should be
console.log(leastFactorial(n));// = 24.

//17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).