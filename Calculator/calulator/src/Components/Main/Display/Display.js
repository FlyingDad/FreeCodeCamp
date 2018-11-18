import React from 'react';
import './display.scss'

const Display = (props) => {
	return (
		<div className="Display">
			{props.display}
		</div>
	);
};

export default Display;