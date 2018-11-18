/* jshint esversion: 6 */

$( document ).ready(function() {
	// console.log( "ready!" );
	
	let accumulator = [];
	let inputReg = [0];
	let sign = true;   // true = pos, false: neg number
	let calcInProgress = false; // true = button pessed)except equal
	let operation = '';
	let equalPressed = false;
	let ireg = 0;
	let acc = 0;
	//inputReg = [1,2,3,4, '.', 2,2,3,];
	display(inputReg);

	$('.jqbtn').on('click', function(){
		var input = $(this).attr('data-value');
		checkButtonType(input);
	});
	// Check button type, and perform action
	function checkButtonType(input){
		//console.log("Check: " + input, calcInProgress);
		if(input == 'x' || input == '/' || input == '+' || input == '-') {
			if(equalPressed){
				operation = input;
				inputReg = [0];
				equalPressed = false;
				return;
			} else if(calcInProgress){
				if(operation == input){
					performCalc(input);
				} else {
					operation = input;
					inputReg = [0];
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
			changeSign();
		} else if (input == '.'){
			console.log('decimal');
		} else {
			numberPressed(input);
		}
	}

	// Calulation button pressed
	function performCalc(calcType){	
		console.log('calulating');
		// if (operation != calcType) {
		// 	calcInProgress = false;
		// }
		console.log(calcInProgress);
		if(!calcInProgress){
			console.log('no-calc', calcType);
			accumulator = inputReg;
			operation = calcType;
			calcInProgress = true;
			inputReg = [0];
		} else {
			console.log('operation: ' + operation);
			switch(operation) {				
				case '+':
					ireg = Number(inputReg.join(''));
					acc= Number(accumulator.join(''));
					console.log('adding');
					acc += ireg;
					accumulator = (""+acc).split("");
					//clearEntry();
					display(accumulator);
					break;
			case '-':
					ireg = Number(inputReg.join(''));
					acc= Number(accumulator.join(''));
					console.log('sub');
					acc -= ireg;
					//clearEntry();
					accumulator = (""+acc).split("");
					display(accumulator);
					break;
			case 'x':
					ireg = Number(inputReg.join(''));
					acc= Number(accumulator.join(''));
					console.log('mult');
					acc *= ireg;
					//clearEntry();
					accumulator = (""+acc).split("");
					display(accumulator);
					break;
			case '/':
					ireg = Number(inputReg.join(''));
					acc= Number(accumulator.join(''));
					console.log('divide');
					acc /= ireg;
					//clearEntry();
					accumulator = (""+acc).split("");
					display(accumulator);
					break;
			}
		}
		calcInProgress = true;
		testDisplay();
	}

	function numberPressed(number){
		// if just zero in register, replace with first number
		if(inputReg.length == 1 && inputReg[0] == 0){
			inputReg = [];
		}
		inputReg.push(number);
		console.log(inputReg);
		//let display1 = inputReg.join('');
		display(inputReg);
		testDisplay();
	}

	function changeSign(){
		console.log(changeSign);
	}


	function resetCalculator(){
		console.log('resetting');
		accumulator = [];
	  inputReg = [0];
		sign = true;   // true = pos, false: neg number
		calcInProgress = false; // true = button pessed)except equal
		operation = '';
		equalPressed = false;
		display(inputReg);
		testDisplay();
	}


	function display(result){
		console.log(typeof(result));
		let display1 = result.join('');
		console.log('result: ' + display1, typeof(display1));
		$('.col-display h2').text(display1);
	}

	function testDisplay(){
		$('#acc').text(accumulator);
		$('#ireg').text(inputReg);
		$('#ctype').text(operation);
		$('#cinprogress').text(calcInProgress == true ? 'true' : 'false');
	}

});