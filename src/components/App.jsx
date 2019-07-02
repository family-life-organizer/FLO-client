import React, { Component, Fragment } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout, doWelcomeBack } from '../actions/authActions';
import PrivateRoute from './common/PrivateRoute';
import FloApp from './application/FloApp';
import Onboard from './login/Onboard';
import { GlobalStyle } from '../styles/GlobalStyle';
import CssBaseLine from '@material-ui/core/CssBaseline';
import jwt_decode from 'jwt-decode';

class App extends Component {
	async componentDidMount() {
		if (localStorage.getItem('login_token')) {
			console.log(`I was called`);
			const token = jwt_decode(localStorage.getItem('login_token'));
			console.log(token);
			const currentDate = Date.now() / 1000;
			(await token.exp) > currentDate ? this.props.doWelcomeBack() : this.props.doLogout();
			this.props.isAuth && this.props.history.push('/app');
		}
	}

	render() {
		return (
			<Fragment>
				<CssBaseLine />
				<GlobalStyle />
				<Switch>
					<PrivateRoute path='/app' component={FloApp} />
					<Route exact path='/' component={Onboard} />
				</Switch>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

App = withRouter(App);
export default connect(mapStateToProps, { doLogout, doWelcomeBack })(App);
