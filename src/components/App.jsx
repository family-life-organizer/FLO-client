import React, {Component, Fragment} from 'react'
import {Route, withRouter, Switch} from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import FloApp from './application/FloApp';




class App extends Component {

    // componentDidMount() {
        
    // }

    render() {
        return (
            <>
                <Route exact path = "/login" component={FloApp} />
                <PrivateRoute exact path = "/app" component={FloApp} />
            </>
        );
    }
}

App = withRouter(App);
export default App;