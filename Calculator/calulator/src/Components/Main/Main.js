import React, { Component } from 'react';
import Display from './Display/Display';
import Button from './Button/Button';
import './main.scss';

class Main extends Component {

	keypressHandler = (id => {
		console.log(id)
	})

	render() {
		return (
			<div className="Main">
				<div className="item-display">
					<Display display="12345" />
				</div>
				<div className="item-operation">
					<Button buttonType="+" className="operation" press={this.keypressHandler} />
				</div>
				<div className="item-operation">
					<Button buttonType="−" className="operation"  press={this.keypressHandler}/>
				</div>
				<div className="item-operation">
					<Button buttonType="×" className="operation"  press={this.keypressHandler}/>
				</div>
				<div className="item-operation">
					<Button buttonType="÷" className="operation"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="7"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="8"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="9"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="4"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="5"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="6"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="1"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="2"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="3"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="0"  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="."  press={this.keypressHandler}/>
				</div>
				<div className="item-button">
					<Button buttonType="C"  press={this.keypressHandler}/>
				</div>
				<div className="item-equal">
					<Button buttonType="=" className="equal"  press={this.keypressHandler}/>
				</div>
			</div>
		);
	}
}

export default Main;
