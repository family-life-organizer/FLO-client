import React, { Component, Fragment } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import FloApp from './application/FloApp';
import Onboard from './login/Onboard';
import { GlobalStyle } from '../styles/GlobalStyle';
import CssBaseLine from '@material-ui/core/CssBaseline';

class App extends Component {
	// componentDidMount() {

	// }

	render() {
		return (
			<Fragment>
				<CssBaseLine />
				<GlobalStyle />
				<Switch>
					<PrivateRoute path='/app' component={FloApp} />
					<Route path='/' component={Onboard} />
				</Switch>
			</Fragment>
		);
	}
}

App = withRouter(App);
export default App;
