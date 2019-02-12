function additionWithoutCarrying(param1, param2) {
	let boysAnswer = 0;
	if(param1 < param2) {
		num1 = String(param1).padStart(String(param2).length, '0').split('').reverse().map(n => Number(n));
		num2 = String(param2).split('').reverse().map(n => Number(n));
	} else {
		num2 = String(param1).split('').reverse().map(n => Number(n));
		num1 = String(param2).padStart(String(param1).length, '0').split('').reverse().map(n => Number(n));
	}

	console.log(num1, num2)

	for(let i = 0; i <= num1.length - 1; i++) {
			// console.log(num1[i],  num2[i], ((num1[i] + num2[i]) % 10))
			// console.log(Math.pow(10, i))
			// console.log(((num1[i] + num2[i]) % 10) * Math.pow(10, i))
			boysAnswer += ((num1[i] + num2[i]) % 10) * Math.pow(10, i);
	}
	return boysAnswer
}


// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Note: the boy used this site as the source of knowledge, feel free to check it out too if you are not familiar with column addition.

// Example

let param1 = 456, param2 = 1734;//, the output should be
console.log(additionWithoutCarrying(param1, param2));// = 1180.


//2190 actual answer
//    456
//   1734
// + ____
//   1180
// The little boy goes from right to left:

// 6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column
// 5 + 3 = 8
// 4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.
// There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.