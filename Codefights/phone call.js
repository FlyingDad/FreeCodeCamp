function phoneCall(min1, min2_10, min11, s) {
	console.log(min1, min2_10, min11, s);
	if (s < min1) {
		return 0;
	}
	if (s == min1) {
		return 1;
	}
	let remainingS = s - min1;
	let totalMins = 1;
	console.log('1 min ', 'remaining cents: ',remainingS)
	for(let min = 1; min < 10; min++) {
		if(remainingS - min2_10 >= 0 ) {
			remainingS -= min2_10;
			totalMins += 1;
		} else {
			return totalMins;
		}
		console.log(min)
	}
	console.log('10 min ', 'remaining cents: ',remainingS)
	while(remainingS - min11 >= 0){
			remainingS -= min11;
			totalMins += 1;
	}
	console.log(remainingS,totalMins);

	return totalMins;
}

// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

// Example

let min1 = 3,
	min2_10 = 1,
	min11 = 2,
	s = 20; //, the output should be
console.log(phoneCall(min1, min2_10, min11, s));// = 14.

// Here's why:

// the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
// the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
// each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
// Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

min1 = 10;
min2_10 = 1;
min11 = 2;
s = 22;
console.log(phoneCall(min1, min2_10, min11, s)); //11

min1= 2
min2_10= 2
min11= 1
s= 24

console.log(phoneCall(min1, min2_10, min11, s)); //14