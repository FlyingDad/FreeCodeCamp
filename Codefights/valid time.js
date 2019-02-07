function validTime(time) {
	let timeArr = time.split(':').map(n => Number(n));
	console.log(timeArr)
	if(timeArr[0] < 0 || timeArr[0] > 23) {
		return false;
	}
	if(timeArr[1] < 0 || timeArr[1] > 59) {
		return false;
	}
	return true;
}


// Check if the given string is a correct time representation of the 24-hour clock.

// Example

let time = "13:58";//, the output should be
console.log(validTime(time));// = true;
 time = "25:51";//, the output should be
console.log(validTime(time));// = false;
 time = "24:01";//, the output should be
console.log(validTime(time));// = false.