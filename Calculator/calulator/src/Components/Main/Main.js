import React, { Component } from 'react';
import Display from './Display/Display';
import Button from './Button/Button';
import './main.scss';

class Main extends Component {
	state = {
		display: '0',
		inputBuffer: null,
		decimalSet: false,
		operation: null,
		operationPressed: false,
		modValue: null,
		equalActive: false
	};

	keypressHandler = id => {
		if (id === '+' || id === '−' || id === '×' || id === '÷') {
			this.operationEntered(id);
		} else if (id === '.') {
			this.decimalEntered();
		} else if (id === '=') {
			this.equalPressed();
		} else if (id === 'C') {
			this.clearEntered();
		} else {
			this.numberEntered(id);
		}
	};

	operationEntered = op => {
		const currentNum = this.state.display;
		//operation being pressed after second number entered (instead of equal)
		if(this.state.inputBuffer && !this.state.operationPressed && !this.state.equalActive){
			this.setState({operation: op, operationPressed: true, equalActive: false})
			this.equalPressed();
			return;
		} 
		this.setState({
			operation: op,
			inputBuffer: currentNum,
			operationPressed: true
		});
	};

	numberEntered = num => {
		if (!this.state.inputBuffer) {
			if (this.state.display === '0') {
				this.setState({ display: num, equalActive: false });
			} else {
				const newNum = this.state.display + num;
				this.setState({ display: newNum, equalActive: false });
			}
			// operation pressed
		} else {
			if (this.state.operationPressed) {
				this.setState({ display: num, operationPressed: false, equalActive: false });
			} else {
				const newNum = this.state.display + num;
				this.setState({ display: newNum, equalActive: false });
			}
		}
	};

	equalPressed = () => {
		if(this.state.inputBuffer) {
			console.log('stage 1')
			let firstNum;
			let secondNumber;
			if(this.state.operation && this.state.modValue && this.state.equalActive){
				firstNum = parseFloat(this.state.display);
				secondNumber = this.state.modValue;
			} else {
				firstNum = parseFloat(this.state.inputBuffer);
				secondNumber = parseFloat(this.state.display);
			}
			console.log('stage 2 ' + firstNum + ' ' + secondNumber)
			const op = this.state.operation;
			let result;
			if (op === '+') {
				result = firstNum + secondNumber;
			} else if (op === '−') {
				result = firstNum - secondNumber;
			} else if (op === '×') {
				result = firstNum * secondNumber;
			} else if (op === '÷') {
				result = firstNum / secondNumber;
			}
			const trimmedResult = String(result).substring(0, 12); // max display length
			this.setState({ display: String(trimmedResult), inputBuffer: String(result), modValue: secondNumber, equalActive: true});
			}
	};

	decimalEntered = () => {
		if (!this.state.decimalSet) {
			if (this.state.operationPressed) {
				const newNum = '0.';
				this.setState({ display: newNum, decimalSet: true, operationPressed: false, equalActive: false });
			} else {
			const newNum = this.state.display + '.';
			this.setState({ display: newNum, decimalSet: true, equalActive: false });
			}
		}
	};

	clearEntered() {
		this.setState({
			display: '0',
			decimalSet: false,
			operation: null,
			inputBuffer: null,
			equalActive: false,
			modValue: null
		});
	}

	render() {
		return (
			<div className="Main">
				<div className="item-display">
					<Display display={this.state.display} />
				</div>
				<div className="item-operation">
					<Button
						buttonType="+"
						className="operation"
						press={this.keypressHandler}
					/>
				</div>
				<div className="item-operation">
					<Button
						buttonType="−"
						className="operation"
						press={this.keypressHandler}
					/>
				</div>
				<div className="item-operation">
					<Button
						buttonType="×"
						className="operation"
						press={this.keypressHandler}
					/>
				</div>
				<div className="item-operation">
					<Button
						buttonType="÷"
						className="operation"
						press={this.keypressHandler}
					/>
				</div>
				<div className="item-button">
					<Button buttonType="7" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="8" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="9" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="4" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="5" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="6" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="1" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="2" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="3" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="0" press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="." press={this.keypressHandler} />
				</div>
				<div className="item-button">
					<Button buttonType="C" press={this.keypressHandler} />
				</div>
				<div className="item-equal">
					<Button
						buttonType="="
						className="equal"
						press={this.keypressHandler}
					/>
				</div>
			</div>
		);
	}
}

export default Main;
