import React from 'react';
import styled from 'styled-components';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ScheduleRounded from '@material-ui/icons/ScheduleRounded';
import Favorite from '@material-ui/icons/Favorite';

const FooterStyle = styled.footer`
    display: none;
    @media screen and (max-width: 500px) {
        height: 12vh;
        width: 100vw;
        background-color: #5C70DC;
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
                <Favorite style={{ color: "white", width: "28px", height: "28px"}}/>
            </IconStyle >
            <IconStyle>
                <AccountCircle style={{ color: "white", width: "28px", height: "28px"}}/>
            </IconStyle >
            <IconStyle>
                <ScheduleRounded style={{ color: "white", width: "28px", height: "28px"}}/>
            </IconStyle >
        </FooterStyle>
    );
}

export default Footer;