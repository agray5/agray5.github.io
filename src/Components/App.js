//Core
import React, { Component } from 'react';
import './App.css';

//Depends
import styled from 'styled-components';

//Components
import SideBar from './SideBar';
import Title from './Title'
import Constellations from './Constellations'
import {media, mediaMax} from '../Utils/MediaQueries'

//Assets 
import wolf from '../Img/wolf.png';
import {Colors} from '../theme'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 0, width: 0};
  }

  componentDidMount() {
    const height = document.getElementById('root').clientHeight;
    const width = document.getElementById('root').clientWidth;
    this.setState({ height, width });
  }

  render() {
    console.log(this.state.height, this.state.width)
    return (
      <Root id="container">
        <SideBar />
        <Title/>
        <StyledImg src={wolf} />
        <StyledConstellations width={window.innerWidth/2} height={window.innerHeight}/>
        {/*<Divider></Divider>*/}
      </Root>
    );
  }
}


const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
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


export default App;
