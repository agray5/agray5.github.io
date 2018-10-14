import React, { Component } from 'react';
import { Flex } from 'rebass'
import styled from 'styled-components';
import chroma from 'chroma-js'


class Title extends React.Component{
    render(){
        return(
            <Flex justifyContent="space-around" flexDirection="column" width={0.5} 
                  alignItems="center">
                <MainTitle>April Gray</MainTitle>
                <SubTitle>Mobile/Web/Software</SubTitle>
                <SubTitle>Developer</SubTitle>
            </Flex>
        )
    }
}

export default Title


const MainTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes[6]}rem;
  font-family: ${props => props.theme.fonts.cursive};
  color: ${props => props.theme.colors.primary};
`;

const SubTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes[3]}rem;
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => chroma(props.theme.colors.primary)};
`;