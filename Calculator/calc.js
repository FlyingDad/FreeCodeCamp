/* jshint esversion: 6 */

$( document ).ready(function() {
	console.log( "ready!" );

let accumulator = [];
let inputReg = [];
let sign = true;   // true = pos, false: neg number
let calcInProgress = false; // true = button pessed)except equal
let operation = '';
let equalPressed = false;

display(0);

	$('.jqbtn').on('click', function(){
		var input = $(this).attr('data-value');
		//console.log('Press: ' + $(this).attr('data-value'));
		//display(input);
		checkButtonType(input);
	});

	// Check button type, and perform action
	function checkButtonType(input){
		//console.log("Check: " + input, calcInProgress);
		if(input == 'x' || input == '/' || input == '+' || input == '-') {
			if(equalPressed){
				operation = input;
				inputReg = 0;
				equalPressed = false;
				return;
			} else if(calcInProgress){
				if(operation == input){
					performCalc(input);
				} else {
					operation = input;
					inputReg = 0;
					equalPressed = false;
					return;
				}
			} else if (input == '') {
				return;
			}else{
				performCalc(input);
			}
		} else if(input == "="){
			if(operation == ''){
				return;
			}
			equalPressed = true;
			performCalc(operation);
	  }else if(input == 'ac') {
			resetCalculator();
		} else if(input == 'ce') {
			clearEntry();
		} else if(input == 'sign'){
			console.log('change sign');
		} else if (input == '.'){
			console.log('decimal');
		} else {
			numberPressed(input);
		}
	}
	// Calulation button pressed
	function performCalc(calcType){	
		// if (operation != calcType) {
		// 	calcInProgress = false;
		// }
		console.log(calcInProgress);
		if(!calcInProgress){
			console.log('no-calc', calcType);
			accumulator = inputReg;
			operation = calcType;
			calcInProgress = true;
			inputReg = 0;
		} else {
			console.log('operation: ' + operation);
			switch(operation) {				
				case '+':
				  //operation = calcType;
					console.log('adding');
					accumulator += inputReg;
					//clearEntry();
					display(accumulator);
					break;
			case '-':
				  //operation = calcType;
					console.log('sub');
					accumulator -= inputReg;
					//clearEntry();
					display(accumulator);
					break;
			case 'x':
				  //operation = calcType;
					console.log('mult');
					accumulator *= inputReg;
					//clearEntry();
					display(accumulator);
					break;
			case '/':
				  //operation = calcType;
					console.log('divide');
					accumulator /= inputReg;
					//clearEntry();
					display(accumulator);
					break;
			}
		}
		calcInProgress = true;
		testDisplay();
	}

	function clearEntry() {	
		inputReg = 0;
		//inputRegShift = 1;
		//display(0);
		testDisplay();
	}
	// Clear Entry pressed
	// Number pressed
	function numberPressed(number){
		//if first number pressed, put it in indexreg
		//let val = Number(number);
		// if(inputReg.length === 0){
		// 	inputReg.push(number);
		// } else {
			//shift number left ( x 10)
			//inputReg *= 10;
			inputReg.push(number);
		//}	
		console.log(inputReg[0]);
		//let display1 = inputReg.join('');
		display(inputReg);
		testDisplay();
	}

	function display(result){
		let display = result.join('');
		console.log('result: ' + result, typeof(result));
		$('.col-display h2').text(result.toString());
		// $('#acc').text(accumulator);
		// $('#ireg').text(inputReg);
		// $('#ctype').text(operation);
		// $('#cinprogress').text(calcInProgress == true ? 'true' : 'false');
	}

	function resetCalculator(){
		console.log('resetting');
		accumulator = 0;
	  inputReg = 0;
		sign = true;   // true = pos, false: neg number
		calcInProgress = false; // true = button pessed)except equal
		operation = '';
		equalPressed = false;
		display(0);
		testDisplay();
	}

	function testDisplay(){
		$('#acc').text(accumulator);
		$('#ireg').text(inputReg);
		$('#ctype').text(operation);
		$('#cinprogress').text(calcInProgress == true ? 'true' : 'false');
	}

});