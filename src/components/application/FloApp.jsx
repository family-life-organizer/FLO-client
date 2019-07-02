import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloNav from './navbar/FloNav';
// import BadgerDen from './ui/BadgerDen';
import Footer from './footer/Footer';

class FloApp extends Component {
	render() {
		return (
			<div>
				<FloNav />
				{/* <BadgerDen /> */}
				<Footer />
			</div>
		);
	}
}

export default FloApp;
