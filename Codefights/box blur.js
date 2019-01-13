let getAverageValue = (arr, x, y) => {
	let sum = 0;
	console.log('x, y: ', x, y);
	for (let col = x; col < x + 3; col++) {
		for (let row = y; row < y + 3; row++) {
			console.log(arr[col][row]);
			sum += arr[col][row];
		}
	}
	return Math.floor(sum / 9);
};

function boxBlur(image) {
	let blurredImage = [];

	let horizBoxes = image[0].length - 3;
	let vertBoxes = image.length - 3;
	for (let i = 0; i <= horizBoxes; i++) {
		let col = [];
		for (let j = 0; j <= vertBoxes; j++) {
			let average = getAverageValue(image, i, j);
			console.log('ave: ', average);
			col.push(average);
		}
		blurredImage.push(col);
	}
	return blurredImage;
}

let image = [[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]];
console.log(boxBlur(image));
image = [[36, 0, 18, 9], [27, 54, 9, 0], [81, 63, 72, 45]];
console.log(boxBlur(image));
