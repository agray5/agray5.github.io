import React, { Component } from 'react';
import './App.css';

import SideBar from './SideBar';

import styled from 'styled-components';
import wolf from '../Img/wolf.png';

class App extends Component {
  render() {
    return (
      <Root id="root">
        <SideBar />
        <div ></div>
        <StyledImg src={wolf} />
      </Root>
    );
  }
}

const Root = styled.div`
`;

const StyledImg = styled.img`
  width: 50%;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;


export default App;
