import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloNav from '../navbar/FloNav';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import FamilyCard from '../card/FamilyCard';
import Person from '@material-ui/icons/Person';

const ImgStyle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	img {
		width: 128px;
		height: 112px;
		margin: 0 auto;
		@media screen and (max-width: 500px) {
			width: 86px;
			height: 78px;
		}
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 100px;
	height: 100%;
	width: 100%;
	h2 {
		width: 100%;
		text-align: center;
	}
	form {
		width: 70%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		button {
			width: 50%;
			margin-bottom: 50px;
			@media screen and (max-width: 500px) {
				width: 80%;
			}
		}
		p {
			width: 100%;
			text-align: center;
		}
	}
`;

class BadgerFamily extends Component {
	render() {
		return (
			<ContentContainer>
				<FloNav />
				<ImgStyle>
					<img src={process.env.PUBLIC_URL + '/Badger.jpg'} />
				</ImgStyle>
				<h2>Family</h2>
				{this.props.family.map(member => <FamilyCard text={member.username} Icon={Person} />)}
				<Footer />
			</ContentContainer>
		);
	}
}

const mapStateToProps = state => ({ family: state.users.family });

export default connect(mapStateToProps, {})(BadgerFamily);
