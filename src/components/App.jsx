import React, { Component, Fragment } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import FloApp from './application/FloApp';
import Onboard from './login/Onboard';

class App extends Component {
	// componentDidMount() {

	// }

	render() {
		return (
			<Fragment>
				<Switch>
					<Route path='/' component={Onboard} />
					<PrivateRoute path='/app' component={FloApp} />
				</Switch>
			</Fragment>
		);
	}
}

App = withRouter(App);
export default App;
