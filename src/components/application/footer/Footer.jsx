import React from 'react';
import styled from 'styled-components';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeRounded from '@material-ui/icons/HomeRounded';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Favorite from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

const FooterStyle = styled.footer`
	display: none;
	position: fixed;
	bottom: 0px;
	z-index: 1;
	@media screen and (max-width: 500px) {
		height: 8vh;
		width: 100vw;
		background-color: #5c70dc;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
`;

const IconStyle = styled.div`
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		transition: 0.25s;
		opacity: 1.0;
		transform: translateY(-2px);
	}
`;

const Footer = () => {
	return (
		<FooterStyle>
			<IconStyle>
				<Link to='/calendar'>
					<CalendarToday style={{ color: 'white', width: '24px', height: '24px' }} />
				</Link>
			</IconStyle>
			<IconStyle>
				<Link to='/profile'>
					<AccountCircle style={{ color: 'white', width: '28px', height: '28px' }} />
				</Link>
			</IconStyle>
			<IconStyle>
				<HomeRounded style={{ color: 'white', width: '28px', height: '28px' }} />
			</IconStyle>
		</FooterStyle>
	);
};

export default Footer;
