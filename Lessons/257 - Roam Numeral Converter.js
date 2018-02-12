function convertToRoman(num) {
	var arrM = ["", "M", "MM", "MMM", "MMMM", "MMMMM"];
	var arrC = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	var arrX = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	var arrI = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

	var thousands = arrM[Math.floor(num/1000)];
    var hundereds = arrC[Math.floor((num%1000)/100)];
    var tens =  arrX[(Math.floor((num%100)/10))];
	var ones = arrI[num%10];
	
	return(thousands + hundereds + tens + ones);

}

var romanDict = {
	1: 'I',
	5: 'V',
	10: 'V',
	50: 'L',
	100: 'C',
	500: 'D',
	1000: 'M'
};

console.log(convertToRoman(36));