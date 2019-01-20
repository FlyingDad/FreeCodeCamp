const growth = (height, speed) => height + speed;

function growingPlant(upSpeed, downSpeed, desiredHeight) {

	let height = 0;
	let days = 0

	while(true) {
		days++;
		height = growth(height, upSpeed);
		if(height >= desiredHeight) {
			break;
		}
		height = height = growth(height, -downSpeed);
		if(height >= desiredHeight) {
			break;
		}
	}
	

	return days

}

let upSpeed = 100, downSpeed = 10,  desiredHeight = 910;//, the output should be
console.log(growingPlant(upSpeed, downSpeed, desiredHeight))// = 10.