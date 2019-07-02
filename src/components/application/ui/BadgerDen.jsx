import React, {Component} from 'react';
import styled from 'styled-components';
import ScheduleRounded from '@material-ui/icons/ScheduleRounded';
import IconCard from '../card/IconCard';

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

const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    margin-top: 100px;
    height: 100%;
    clear: both;
    width: 100%;
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
                <IconCard text={'Schedule'} Icon={ScheduleRounded} />
            </ContentContainer>
        );
    }
}

export default BadgerDen;