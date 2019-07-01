import React, { Fragment, useState } from 'react';
import { doLogin, doRegisterAccount } from '../../actions/authActions';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Onboard = ({ doLogin, isAuth, doRegisterAccount, history }) => {
	const [ isLogin, setisLogin ] = useState(true);
	const handleSubmit = async values => {
		isLogin ? await doLogin(values) : await doRegisterAccount(values);
		isAuth && history.push('/app');
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

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { doLogin, doRegisterAccount })(Onboard);
