import React from 'react';

const Button = ({ btnStyle, btnType, children }) => {
	return (
		<div>
			<button className={`btn ${btnStyle}`} type={btnType}>
				{children}
			</button>
		</div>
	);
};

export default Button;
