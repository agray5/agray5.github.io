import React, { Component, Children } from 'react';
import styled from 'styled-components';

import theme from '../theme'
import { Box, Typography, RootRef } from '@material-ui/core';
import anime from 'animejs';

class LineDrawing extends React.Component{
  myRef = React.createRef();
  update = 0;

  componentDidMount () {
    this.anim = anime({
      targets: document.querySelectorAll("#svg text"),
      strokeDashoffset: 0,
      easing: 'cubicBezier(.5, .05, .1, .3)',            
      delay: function() { return anime.random(0, 500); },
      update: (anim) => {
        //document.querySelectorAll("#svg text").forEach(item => item.style.opacity = Math.round(anim.progress)/100);
      }
    });
  }

    render(){
      const SVG = this.props.svg;
        return(
          <RootRef rootRef={this.myRef}>
              <SVG id="svg"/>
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
export default LineDrawing