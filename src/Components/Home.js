import React, { Component } from 'react'

//Depends
import styled from 'styled-components';

//Components
import Title from './Title'
import Constellations from './Constellations'
import {media, mediaMax} from '../Utils/MediaQueries'

//Assets 
import wolf from '../Img/wolf.png';
import {Colors} from '../theme'


class Home extends Component {

    render() {
      return (
        <Root id="container">
          <Title title="April Gray" subtitles={["Mobile/Web/Software", "Developer"]}/>
          <StyledImg src={wolf} />
          <StyledConstellations width={window.innerWidth/2} height={window.innerHeight}/>
          {/*<Divider></Divider>*/}
        </Root>
      );
    }
  }
  
export default Home;

const Root = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(${Colors.primary} 0%,rgba(0,0,0,1) 70%);

    ${media.desktop`background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);`}
`;

const StyledConstellations = styled(Constellations)`
    display: none;
    position: absolute;
    right: 0;
    top: 0;

    ${media.desktop`display: block;`}
`

const StyledImg = styled.img`
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    transform: scaleX(-1);

    ${media.desktop`width: 50%;`}
    ${mediaMax.desktop`height: 50%;`}
`;

