let n = 0;

const getYearsToMaturity = (deposit, rate, threshold,) => {
	if(deposit < threshold) {
		n++;
		deposit += deposit * (rate * .01);
		getYearsToMaturity(deposit, rate, threshold)
		console.log(deposit ,n)
	}
}



function depositProfit(deposit, rate, threshold) {


	console.log(getYearsToMaturity(deposit, rate, threshold));

	return '---'
}


let deposit = 100, rate = 20,  threshold = 170;//, the output should be
console.log(depositProfit(deposit, rate, threshold));// = 3.