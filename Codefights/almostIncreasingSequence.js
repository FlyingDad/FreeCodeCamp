/* jshint esversion: 6 */

function almostIncreasingSequence(sequence) {
	//if(sequence.length <= 2) {return true;}
	let goodSequence = false;
	for(let i = 0; i < sequence.length; i++){
		let sliced = sequence.slice();
		sliced.splice(i, 1);
		console.log(sliced);
		for(let j = 0; j < sliced.length-1; j++ ){
			console.log(sliced[j], sliced[j+1]);		
			if(sliced[j] >= sliced[j+1]){
				console.log('breaking');
				break;
			}
			
		}
		console.log('setting true');
			goodSequence = true; 
		// 	goodSequence = true;		
		// }
		// return goodSequence;
	}	
	return goodSequence;
}


console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
//console.log(almostIncreasingSequence([1, 3, 2])); // true
//console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
//console.log(almostIncreasingSequence([1, 1, 1, 2, 3])); //false
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].