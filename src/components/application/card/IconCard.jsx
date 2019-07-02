import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: lightgrey;
`;

const IconCard = props => {
    const {text, Icon} = props;
    return (
        <CardContainer>
            <Icon style={{height: '96px', width: '96px', color: "grey"}}/>
        </CardContainer>
    );
}

export default IconCard;