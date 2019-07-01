import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloNav from './navbar/FloNav';

class FloApp extends Component {
	render() {
		return (
			<div>
				<FloNav />
			</div>
		);
	}
}

export default FloApp;
