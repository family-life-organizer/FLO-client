import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 108px;
    width: 100px;
    .textbar {
        width: 100%;
        height: 24px;
        background-color: "#2439A8";
    }
`;

const IconCard = props => {
    const {text, Icon} = props;
    return (
        <CardContainer>
            <Icon style={{height: '64px', width: '64px', color: "grey"}}/>
            <div className="textbar">
                <p>{text}</p>
            </div>
        </CardContainer>
    );
}

export default IconCard;