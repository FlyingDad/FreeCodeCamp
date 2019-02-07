function fileNaming(names) {

	let fileNames = new Set();
	
	names.forEach(file => {
		let dupes = 0;
		if(!fileNames.has(file)){
			fileNames.add(file)
		}else {
			let found = false;
			while(!found) {
				dupes += 1
				newFile = file + '(' + dupes + ')';
				if(!fileNames.has(newFile)) {
					found = true;
					fileNames.add(newFile);
				}
			}
		}
	});
	return Array.from(fileNames);
}

// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

let names = ["doc", "doc", "image", "doc(1)", "doc"];//, the output should be
console.log(fileNaming(names))// = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]);

