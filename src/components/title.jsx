import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h1`
    color: black;
    font-size: 8rem;
    text-align:center;
    background-color: white;
    padding: 16px;
    width: max-content;
    opacity: .6;
    margin: 250px auto 0;
    border-radius: 8px;
    display: ${props => props.displayState  ?'block' : 'none'};

`

function Description(props) {
    const {displayState} = props
    return(
    <StyledTitle displayState={displayState}>{props.photoTitle}</StyledTitle>
    )
}

export default Description;