import React, { Component, Children } from 'react';
import styled from 'styled-components';

import theme from '../theme'
import { Box, Typography, RootRef } from '@material-ui/core';
import anime from 'animejs';

class LetterRain extends React.Component{
  myRef = React.createRef();

  componentDidMount () {
    this.anim = anime({
      targets: document.getElementById("umhello"),
      translateY: '100vh',
      autoplay: true,
      loop: true,
      easing: 'easeInSine',
      duration: 3000,
    });
  }

    render(){
        return(
          <RootRef rootRef={this.myRef}>
              <button onClick={() => this.anim.restart()}>Start</button>
              <Typography id="umhello">My worldo</Typography> 
            </RootRef>
        )
    }
}

const StyledA = styled.a`
    z-index: 100;
    position: absolute;
    right: 10px;
    bottom: 10px;
    
    background-color: ${theme.palette.background.main};
    color: ${theme.palette.primary.main};
    text-decoration:none;
    padding:4px 6px;
    font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 
                'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 
                'Segoe UI', Arial, sans-serif;
    font-size:12px;
    font-weight:bold;
    line-height:1.2;
    display:inline-block;
    border-radius:3px

    & span {
        display:inline-block;
        padding:2px 3px;

    }
`;
export default LetterRain