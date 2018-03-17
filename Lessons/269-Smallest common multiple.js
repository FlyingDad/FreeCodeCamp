/*jshint esversion: 6 */

function smallestCommons(arr) {
    arr.sort();
	//arr.sort(function(a, b){return a - b;});
	var expandedArr = [];
	for(let i = arr[0]; i <= arr[arr.length-1]; i++){
		expandedArr.push(i);
    }
    //console.log(expandedArr);

    var x = true;
    var leastCommonMultiple = true;
    while(x){
        leastCommonMultiple ++;
        for(var i = expandedArr[0]; i <= arr[arr.length-1]; i++){
            if(leastCommonMultiple % i !== 0){
                break; // we have a remander, so go to next iteration
            } else if(i==expandedArr[expandedArr.length-1]){
                x = false;
            }
        }
    }
    return leastCommonMultiple;
}


console.log(smallestCommons([1, 5]));// should return 60.
console.log(smallestCommons([5, 1]));// should return 60.
console.log(smallestCommons([1, 13]));// should return 360360.
console.log(smallestCommons([23, 18]));// should return 6056820.


// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.