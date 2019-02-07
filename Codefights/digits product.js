const calcProduct = (arr) => {
	let p = 1;
	for(let j = 0; j < arr.length; j++) {
		p *= arr[j];
	}
	console.log('p ', p)
	return p;
}

const isPrime = num => {
	for(let i = 2, s = Math.sqrt(num); i <= s; i++)
			if(num % i === 0) return false; 
	return num !== 1 && num !== 0;
}

function digitsProduct(product) {
	if(product === 0) {
		return 10;
	}
	if(product < 10) {
		return product;
	}
	console.log('prime? ', isPrime(product))
	if(isPrime(product)){

		return -1;
	}
	let divisor = 10;
	let answer;
	while(divisor < 10000) {
		let arr = String(divisor).split('')
		let p = calcProduct(arr);

		if(p === product) {
			answer = arr.join('');
			divisor = 10000;
		}
		divisor += 1;
		if(divisor === 10000){
			return -1;
		}
	}
	return Number(answer);
}

// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

let product = 7;//, the output should be
// console.log(digitsProduct(product));// = 26;
product = 33;//, the output should be
console.log(digitsProduct(product));// = -1.
product = 600;//, the output should be
// console.log(digitsProduct(product));// = 2559.
