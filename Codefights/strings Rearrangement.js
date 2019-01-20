const permutateWithoutRepetitions = permutationOptions => {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  // Init permutations array.
  const permutations = [];

  // Get all permutations for permutationOptions excluding the first element.
  const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

  // Insert first option into every possible position of every smaller permutation.
  const firstOption = permutationOptions[0];

  for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
    const smallerPermutation = smallerPermutations[permIndex];

    // Insert first option into every possible position of smallerPermutation.
    for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
      const permutationPrefix = smallerPermutation.slice(0, positionIndex);
      const permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
    }
  }

  return permutations;
}

const checkForSingleDifference = arr => {
	
	for(let i = 0; i < arr.length - 1; i++) {

		let s0Arr = arr[i].split('');
		let s1Arr = arr[i + 1].split('')
		let diff = 0;

		for(let j = 0; j < s0Arr.length; j++){
			if(s0Arr[j] != s1Arr[j]) {
				diff += 1;
			}
		}

		if(diff != 1) {
			return false;
		}
	}
	
	return true
}

function stringsRearrangement(inputArray) {

	let perms = permutateWithoutRepetitions(inputArray);
	let onlySingleDifference = false;
	perms.forEach(e => {
		if(checkForSingleDifference(e)) {
			onlySingleDifference = true;
		}
	})
	
	return onlySingleDifference
}

// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

let inputArray = ["aba", "bbb", "bab"]//, the output should be
console.log(stringsRearrangement(inputArray))// = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.
inputArray = ["ab", "bb", "aa"]//, the output should be
console.log(stringsRearrangement(inputArray))// = true.

// It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: ["aa", "ab", "bb" ]-or- ["bb", "ab", "aa"]), so return true.
// ab bb aa 
// ab aa bb 
// bb ab aa T 
// bb aa ab 
// aa bb ab
// aa ab bb T

inputArray = ["q", 
 "q"]
 console.log(stringsRearrangement(inputArray))// = false.
 inputArray = ["zzzzab", 
 "zzzzbb", 
 "zzzzaa"]
 console.log(stringsRearrangement(inputArray))// = true.