function almostIncreasingSequence(sequence) {
	var inOrder = true;
	for(var i = 0; i < sequence.length; i++){
		var tempArr = sequence.slice();
		tempArr.splice(i, 1);
		//console.log(tempArr);
		//var inOrder = true;
		for(var j = 0; j < tempArr.length - 1; j++){
			if(tempArr[0] > tempArr[j+1]){
				console.log('----false');
				inOrder = false;
			} else {return true;}
		}
	}
	return inOrder;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].