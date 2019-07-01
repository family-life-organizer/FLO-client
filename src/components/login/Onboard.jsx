import React, { Fragment, useState } from 'react';
import { doLogin, doRegisterAccount } from '../../actions/authActions';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Onboard = ({ doLogin, doRegisterAccount }) => {
	const [ isLogin, setisLogin ] = useState(true);
	const handleSubmit = values => {
		isLogin ? doLogin(values) : doRegisterAccount(values);
	};
	const handleToggle = () => {
		setisLogin(!isLogin);
	};
	return (
		<Fragment>
			{isLogin ? (
				<SignIn login={isLogin} handleSubmit={handleSubmit} handleToggle={handleToggle} />
			) : (
				<SignUp login={isLogin} handleSubmit={handleSubmit} handleToggle={handleToggle} />
			)}
		</Fragment>
	);
};

export default connect(null, { doLogin, doRegisterAccount })(Onboard);
