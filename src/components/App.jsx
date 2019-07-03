import React, { Component, Fragment } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout, doWelcomeBack, doLogin, doRegisterAccount } from '../actions/authActions';
import PrivateRoute from './common/PrivateRoute';
import FloApp from './application/FloApp';
import Onboard from './login/Onboard';
import { GlobalStyle } from '../styles/GlobalStyle';
import CssBaseLine from '@material-ui/core/CssBaseline';
import jwt_decode from 'jwt-decode';
import BadgerCalendar from './application/ui/BadgerCalendar';
import BadgerProfile from './application/ui/BadgerProfile';
import BadgerFamily from './application/ui/BadgerFamily';
import BadgerTask from './application/ui/BadgerTask/BadgerTask';
import ManageTasksPanel from './application/ui/BadgerTask/ManageTaskPanel'
class App extends Component {
	async componentDidMount() {
		if (localStorage.getItem('login_token')) {
			console.log(`I was called`);
			const token = jwt_decode(localStorage.getItem('login_token'));
			console.log(token);
			const currentDate = Date.now() / 1000;
			if (token.exp > currentDate) {
				await this.props.doWelcomeBack();
			} else {
				await this.props.doLogout();
			}
		}
		this.props.isAuth && this.props.history.push('/app');
	}

	onHandleSubmit = async (action, values) => {
		const { doLogin, doRegisterAccount } = this.props;
		if (action === 'LOGIN') {
			await doLogin(values);
		} else {
			await doRegisterAccount(values);
		}
		if (this.props.isAuth) {
			await this.props.doWelcomeBack();
			this.props.history.push('/app');
		}
	};

	render() {
		return (
			<Fragment>
				<CssBaseLine />
				<GlobalStyle />
				<Switch>
					<PrivateRoute path='/calendar' component={BadgerCalendar} />
					<PrivateRoute path='/profile' component={BadgerProfile} />
					<PrivateRoute path='/tasks' component={BadgerTask} />
					<PrivateRoute path='/family' component={BadgerFamily} />
					<PrivateRoute path='/app' component={FloApp} />
					<PrivateRoute path='/manage/tasks' component={ManageTasksPanel} />
					<Route exact path='/' render={() => <Onboard handleSubmit={this.onHandleSubmit} />} />
				</Switch>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

App = withRouter(App);
export default connect(mapStateToProps, { doLogout, doWelcomeBack, doLogin, doRegisterAccount })(App);
