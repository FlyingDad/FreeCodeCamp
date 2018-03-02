/*jshint esversion: 6 */

function smallestCommons(arr) {
	arr.sort(function(a, b){return a - b;});
	var expandedArr = [];
	for(let i = arr[0]; i <= arr[1]; i++){
		expandedArr.push(i);
	}
	//set initial count to highest number 
	let lcd = arr[1];
	var lcdfound = true;
	while (true) {
        passed = expandedArr.every(function(multiple) {
            return lcd % multiple === 0;
        });
        if (passed) {
            return lcd;
        } else {
            lcd++;
        }
    }
	// do {		
	// 	lcdfound = true;
	// 	for(let i = expandedArr[0]; i <= expandedArr[expandedArr.length -1]; i++){
	// 		//console.log(i);
	// 		if(lcd % i != 0){
	// 			lcdfound = false;
	// 			break;
	// 		}
	// 	}
	// 	lcd++;
	// } while(!lcdfound);

	return lcd - 1;
	var range = createRange(array),                 // We create a range using the createRange function.
        counter = 1,                                // Start the counter (do not start at 0, basic math!)
        passed;
 
    while (true) {                                  // We loop until the end of time (or we return a result)
        passed = range.every(function(multiple) {   // If every number in the range passes, 'passed' will be true, else, it will be false.
            return counter % multiple === 0;            // If true, that number is a multiple.
        });
        if (passed) {
            return counter;                         // If all passed, return the counter var, as it is the answer.
        } else {
            counter++;                              // If any test failed, increment the counter and start over.
        }
    }
 
    function createRange(array) {
        var range = [];
        var highest = array.reduce(function(a, b) {
            return Math.max(a, b);
        });
        var lowest = array.reduce(function(a, b) {
            return Math.min(a, b);
        });
        for (var i = lowest; i <= highest; i++) {
            range.push(i);
        }
        return range;
    }

}


console.log(smallestCommons([1, 5]));// should return 60.
console.log(smallestCommons([5, 1]));// should return 60.
console.log(smallestCommons([1, 13]));// should return 360360.
console.log(smallestCommons([23, 18]));// should return 6056820.


// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.