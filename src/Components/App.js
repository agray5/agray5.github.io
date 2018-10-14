//Core
import React, { Component } from 'react';
import './App.css';

//Depends
import styled from 'styled-components';

//Components
import SideBar from './SideBar';
import Title from './Title'
import Constellations from './Constellations'

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
  background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);
`;


const StyledConstellations = styled(Constellations)`
  position: absolute;
  right: 0;
  top: 0;
`

const Divider = styled.div`
  width: 20px;
  height: 100%;
  background: rgba(${Colors.secondary}, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImg = styled.img`
  width: 50%;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  transform: scaleX(-1);
`;


export default App;
