import React from 'react';
import { Flex } from 'rebass'
import styled from 'styled-components';
import {media, mediaMax, mediaHeight} from '../utils/mediaQueries'
import chroma from 'chroma-js'


class Title extends React.Component{

    render(){
        return(
            <StyledFlex flexDirection="column">
                <MainTitle theme={this.props.theme}>{this.props.title}</MainTitle>
                {this.props.subtitles &&
                    this.props.subtitles.map((item, index) => (
                    <SubTitle theme={this.props.theme} key={index}> {item} </SubTitle>
                ))}
            </StyledFlex>
        )
    }
}

export default Title

const StyledFlex = styled(Flex)`
    margin-top: 5%;
    ${media.desktop`width: 55%;transform: translatey(50%);`} 
    ${media.phone`margin-top: 20%;`}
    ${media.desktop`margin-top: 5%;`}
`;

const MainTitle = styled.h1`
  font-family: ${props => props.theme.fonts.cursive};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  z-index: 2;

  ${props => media.tablet`font-size: ${props.theme.fontSizes[6]}rem;`}
`;

const SubTitle = styled.h2`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => chroma(props.theme.colors.primary)};
  text-align: center;
  z-index: 2;

  ${props => media.tablet`font-size: ${props.theme.fontSizes[2]}rem;`}
`;

