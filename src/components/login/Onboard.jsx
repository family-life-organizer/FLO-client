import React, { Fragment, useState } from 'react';
import { doLogin, doRegisterAccount } from '../../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Onboard = props => {
	console.log(props);
	const [ isLogin, setisLogin ] = useState(true);
	const handleSubmit = async values => {
		if (isLogin) {
			await props.doLogin(values);
			if (props.isAuth) props.history.push('/app');
		} else {
			await props.doRegisterAccount(values);
			if (props.isAuth) props.history.push('/app');
		}
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

export default withRouter(connect(mapStateToProps, { doLogin, doRegisterAccount })(Onboard));
