function makeArrayConsecutive2(statues) {
	statues.sort((a, b) => a - b);
	const span = statues[statues.length - 1] - statues[0];
	return span - statues.length + 1;
}


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

let statues = [6, 2, 3, 8];//, the output should be
console.log(makeArrayConsecutive2(statues));// = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer statues

// An array of distinct non-negative integers.

// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
// 0 ≤ statues[i] ≤ 20.