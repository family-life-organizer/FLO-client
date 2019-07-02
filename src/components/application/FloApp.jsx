import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloNav from './navbar/FloNav';
import BadgerDen from './ui/BadgerDen';
import Footer from './footer/Footer';
import styled from 'styled-components';
import BadgerProfile from './ui/BadgerProfile';

const AppContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

class FloApp extends Component {
	render() {
		return (
			<AppContainer>
				<FloNav />
				<BadgerDen />
				<Footer />
			</AppContainer>
		);
	}
}

const mapStateToProps = state => ({ user: state.users.user });

export default connect(mapStateToProps, {})(FloApp);
