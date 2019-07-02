import React, { Component } from 'react';
import styled from 'styled-components';
import CalendarToday from '@material-ui/icons/CalendarToday';
import IconCard from '../card/IconCard';
import Person from '@material-ui/icons/Person';
import HomeRounded from '@material-ui/icons/HomeRounded';

const ImgStyle = styled.div`
	img {
		width: 128px;
		height: 112px;
		@media screen and (max-width: 500px) {
			width: 86px;
			height: 78px;
		}
	}
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    margin-top: 100px;
    height: 100%;
    clear: both;
    width: 100%;
    padding-left: 100px;
    @media screen and (max-width: 500px) {
        padding-left: 0px;
    }
    h2 {
        margin 5px 0 40px 0;
        font-family: 'Nunito', sans-serif;
        font-weight: bolder;
        font-size: 2.2rem;
        width: 100%;
        text-align: center;
    }
`;

class BadgerDen extends Component {
	render() {
		return (
			<ContentContainer>
				<ImgStyle>
					<img src={process.env.PUBLIC_URL + '/Badger.jpg'} />
				</ImgStyle>
				<h2>Badger's Den</h2>
				<Icons>
					<IconCard text={'Schedule'} Icon={CalendarToday} />
					this.props.user.isAdmin ? <IconCard text={'Family'} Icon={Person} />
					<IconCard text={'My Lists'} Icon={HomeRounded} />
				</Icons>
			</ContentContainer>
		);
	}
}

export default BadgerDen;
