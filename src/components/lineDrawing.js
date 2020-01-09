import React, { Component, Children } from 'react';
import styled from 'styled-components';

import theme from '../theme'
import { Box, Typography, RootRef } from '@material-ui/core';
import anime from 'animejs';
import Simple1DNoise from '../utils/noise';

class LineDrawing extends React.Component{
  myRef = React.createRef();
  
  constructor(props) {
    super(props);

    this.rand = Simple1DNoise();
    this.count = 0;

    console.log(this.rand.getVal(3), "VALS")
  }

  componentDidMount () {
    let {delay = 0, delayMax = 3000} = this.props;
    this.anim = anime({
      targets: document.querySelectorAll("#svg text"),
      strokeDashoffset: [1000, 0],
      opacity: [0.5, 1],
      duration: 2000,
      easing: 'easeInOutExpo',           
      delay:  () => this.rand.getVal(this.count++ * 100) * delayMax + delay,
      update: (anim) => {
        //document.querySelectorAll("#svg text").forEach(item => item.style.opacity = Math.round(anim.progress)/100);
      }
    });
  }

    render(){
      const SVG = this.props.svg;
        return(
          <RootRef rootRef={this.myRef}>
            <div>
              <SVG id="svg"/>
            </div>
              
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