import React from 'react';
import Favorite from '@material-ui/icons/Favorite';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
	background-color: lightgrey;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	height: 125px;
	width: 110px;
	padding-top: 15px;
	margin: 10px 0 10px 0;
	@media screen and (max-width: 500px) {
		height: 115px;
		width: 100px;
	}
`;

const TextBar = styled.div`
	cursor: pointer;
	color: white;
	width: 100%;
	height: 36px;
	font-size: 1.0rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: 'Nunito', sans-serif;
	background-color: #2439a8;
	vertical-align: center;
	@media screen and (max-width: 500px) {
		height: 28px;
		font-size: 0.8rem;
	}
`;

const IconCard = props => {
	const { text, Icon } = props;
	return (
		<div>
		<Link to={`/${text}`} style={{ width: '100%' }}>
		<CardContainer>
			<Icon style={{ height: '64px', width: '64px', color: '#666666', margin: '10px 0 5px 0' }} />
				<TextBar>
					{text}
					<Favorite style={{ height: '16px', width: '16px', color: 'white', paddingBottom: '2px' }} />
				</TextBar>
		</CardContainer>
		</Link>
		</div>
	);
};

export default IconCard;
