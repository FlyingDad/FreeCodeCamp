// function almostIncreasingSequence(sequence) {
// 	if(sequence.length <= 2) {return true};
// 	for(let i = 0; i < sequence.length ; i++){
// 		var sliced = sequence.slice();
// 		sliced.splice(i, 1);
// 		for(let j = 0; j < sliced.length - 1; j++ ){
// 			if(sliced[j] >= sliced[j+1]){
// 				break;
// 			} else if(j === sliced.length - 2){
// 				return true;
// 			}			
// 		}
// 	}

// 	return false;
// }

function almostIncreasingSequence(sequence) {
	let declines = 0;
	for(let i = 0; i < sequence.length - 1; i++){
			console.log('i: ', sequence[i], sequence[i+1])
			if(sequence[i] > sequence [i+1]){
				console.log('next less than')
					if(i <= sequence.length - 2){
							console.log('i less than sequence + 2')
							if(sequence[i] != sequence [i+2]){
									console.log('s2')
									declines ++;
							} else {
							declines ++;
					}
					}
			}
			console.log(declines + '---------')
	}
	return declines <=1 ? true : false;
}


//console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
//console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
//console.log(almostIncreasingSequence([1, 1, 1, 2, 3])); //false
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].