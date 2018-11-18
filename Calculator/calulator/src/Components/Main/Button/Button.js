import React from 'react';
import './button.scss';

const Button = (props) => {

	let classes ="Button"
	if (props.className) {
		classes += ' ' + props.className
	}

	return (
		<div className={classes} onClick={() => props.press(props.buttonType)}>
			{props.buttonType}
		</div>
	);
};

export default Button;