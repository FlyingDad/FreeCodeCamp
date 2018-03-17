function steamrollArray(arr) {
	// I'm a steamroller, baby

	var steamed = [];

	function flatten(elements) {
		elements.forEach(function (e) {
			// if the element is not an array, push to steamed array because
			if (!Array.isArray(e)) {
				steamed.push(e);
			// the element is an array, so recursively call this function again
			} else {
				flatten(e);
			}
		});
	}

flatten(arr);
return steamed;
}

	//console.log(steamrollArray([[1]]));
	console.log(steamrollArray(["a", [["a"]],[["b"]]])); // should return ["a", "b"].
	console.log(steamrollArray([1, [2],[3, [[4]]]])); // should return [1, 2, 3, 4].
	//console.log(steamrollArray([1, [], [3, [[4]]]]));// should return [1, 3, 4].
	//console.log(steamrollArray([1, {}, [3, [[4]]]]));// should return [1, {}, 3, 4].



	// Flatten a nested array. You must account for varying levels of nesting.