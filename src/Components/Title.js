import React, { Component } from 'react';
import { Flex } from 'rebass'
import styled from 'styled-components';
import {media, mediaHeight} from '../Utils/MediaQueries'
import chroma from 'chroma-js'


class Title extends React.Component{
    render(){
        return(
            <StyledFlex flexDirection="column">
                <MainTitle>April Gray</MainTitle>
                <SubTitle>Mobile/Web/Software</SubTitle>
                <SubTitle>Developer</SubTitle>
            </StyledFlex>
        )
    }
}

export default Title

const StyledFlex = styled(Flex)`
    margin-top: 5%;
    ${media.desktop`width: 50%;transform: translatey(50%);`} 
    ${mediaHeight.phone`margin-top: 20%;`}
    ${mediaHeight.desktop`margin-top: 5%;`}
    
    
`;

const MainTitle = styled.h1`
  font-family: ${props => props.theme.fonts.cursive};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  z-index: 2;

  ${media.tablet`font-size: ${props => props.theme.fontSizes[6]}rem;`}
`;

const SubTitle = styled.h2`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => chroma(props.theme.colors.primary)};
  text-align: center;
  z-index: 2;

  ${media.tablet`font-size: ${props => props.theme.fontSizes[2]}rem;`}
`;