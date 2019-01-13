function sortByHeight(a) {

	let treeIndexes = [];
	let people = [];

	for(let i = 0; i < a.length; i++) {
		if(a[i] === -1) {
			treeIndexes.push(i);
		} else {
			people.push(a[i]);
		}
	}
	people.sort(function(a, b){return a - b});

	for(let i = 0; i < treeIndexes.length; i++) {
		people.splice(treeIndexes[i], 0, -1);
	}

	console.log(people);
}





let a = [-1, 150, 190, 170, -1, -1, 160, 180]
sortByHeight(a);

// [-1, 150, 160, 170, -1, -1, 180, 190]