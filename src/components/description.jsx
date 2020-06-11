import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: white;
    opacity: .6;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    padding: 16px;
    display: ${props => props.displayState  ?'block' : 'none'};
    p{
        font-size: 1.8rem;
        line-height: 1.5;
    }

    p:nth-of-type(2){
        font-weight:bold;
    }
`


function Description(props){
    const {explanation, copyright} = props.photoDetails
    const { displayState } = props
    return(
        <StyledDiv  displayState={displayState}>
            <p>{explanation}</p>
            <p> - {copyright}</p>
        </StyledDiv>
    )
}

export default Description;