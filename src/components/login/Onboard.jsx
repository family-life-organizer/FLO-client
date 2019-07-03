import React, { Fragment, useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Onboard = props => {
	const [ isLogin, setisLogin ] = useState(true);
	const addRouteSubmit = values => {
		if (isLogin) {
			props.handleSubmit('LOGIN', values);
		} else {
			props.handleSubmit('REGISTER', values);
		}
	};
	const handleToggle = () => {
		setisLogin(!isLogin);
	};
	return (
		<Fragment>
			{isLogin ? (
				<SignIn login={isLogin} handleSubmit={addRouteSubmit} handleToggle={handleToggle} />
			) : (
				<SignUp login={isLogin} handleSubmit={addRouteSubmit} handleToggle={handleToggle} />
			)}
		</Fragment>
	);
};

export default Onboard;
