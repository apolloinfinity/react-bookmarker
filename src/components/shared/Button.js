import { Fragment } from 'react';

const Button = ({ btnStyle, btnType, children }) => {
	return (
		<Fragment>
			<button className={`btn ${btnStyle}`} type={btnType}>
				{children}
			</button>
		</Fragment>
	);
};

export default Button;
