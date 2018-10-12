//Core
import React, { Component } from 'react';
import './App.css';

//Depends
import styled from 'styled-components';
import { invert } from 'invert-color';

//Components
import SideBar from './SideBar';

//Assets 
import wolf from '../Img/wolf.png';
import {Colors} from '../palette'

class App extends Component {
  render() {
    return (
      <Root id="container">
        <SideBar />
        <StyledImg src={wolf} />
        <Title>April Gray</Title>
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

const Title = styled.h1`
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-25%, -25%);
  color: ${invert('#282b35') };
`;

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
`;


export default App;
