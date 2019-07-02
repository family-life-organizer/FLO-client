import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloNav from './navbar/FloNav';
import BadgerDen from './ui/BadgerDen';
import Footer from './footer/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
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

export default FloApp;
