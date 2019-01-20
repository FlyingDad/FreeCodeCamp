function firstDuplicate(a) {
	let set = new Set(a);
	console.log(a, set)
	let s = a.join('')
	set.forEach(e => {
		// console.log(e)
			let re = new RegExp(`${e}+`,'g');
			let result = s.match(re).index
			console.log(result)
	})
}
let a = [2, 1, 3, 5, 3, 2]//, the output should be firstDuplicate(a) = 3.
console.log(firstDuplicate(a))
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

a = [5, 5]//, the output should be firstDuplicate(a) = 5;

a = [2, 4, 3, 5, 1]//, the output should be firstDuplicate(a) = -1.