import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h1`
    color: black;
    font-size: 8rem;
    text-align:center;
    background-color: white;
    padding: 16px;
    width: max-content;
    opacity: .2;
    margin: 250px auto 0;

`

function Description(props) {


    return(
    <StyledTitle>{props.photoTitle}</StyledTitle>
    )
}

export default Description;