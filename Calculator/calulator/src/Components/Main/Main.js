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
		operationPressed: false
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
		this.setState({
			operation: op,
			inputBuffer: currentNum,
			operationPressed: true
		});
	};

	numberEntered = num => {
		if (!this.state.inputBuffer) {
			if (this.state.display === '0') {
				this.setState({ display: num });
			} else {
				const newNum = this.state.display + num;
				this.setState({ display: newNum });
			}
			// operation pressed
		} else {
			if (this.state.operationPressed) {
				this.setState({ display: num, operationPressed: false });
			} else {
				const newNum = this.state.display + num;
				this.setState({ display: newNum });
			}
		}
	};

	equalPressed = () => {
		const firstNum = parseFloat(this.state.inputBuffer);
		const secondNumber = parseFloat(this.state.display);
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
		this.setState({ display: String(result) });
	};

	decimalEntered = () => {
		if (!this.state.decimalSet) {
			if (this.state.operationPressed) {
				const newNum = '0.';
				this.setState({ display: newNum, decimalSet: true, operationPressed: false });
			} else {
			const newNum = this.state.display + '.';
			this.setState({ display: newNum, decimalSet: true });
			}
		}
	};

	clearEntered() {
		this.setState({
			display: '0',
			decimalSet: false,
			operation: null,
			inputBuffer: null
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
