
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div `
    background-image: url(${props => props.source});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    height: 100vh;
  `

  export default ImageContainer 