import React, { Component, Children } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from "prop-types"

import theme, {Colors} from '../theme'
import { Box, Typography, RootRef } from '@material-ui/core';
import anime from 'animejs';
import LineDrawing from './lineDrawing';

class AnimatedTitle extends React.Component{
  myRef = React.createRef();

  constructor(props) {
    super(props);
    this.titleId = `#${this.props.title}title`.replace(/\s/g, '').toLowerCase();
  }

  componentDidMount () {
    this.anim = anime.timeline()
    .add({
      targets: document.querySelector(this.titleId+" .line"),
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: document.querySelector(this.titleId+" .line"),
      translateX: [0, document.querySelector(this.titleId+" .letters").getBoundingClientRect().width],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    })
    .add({
      targets: document.querySelectorAll(this.titleId+' .letter'),
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 34 * (i+1)
    }, 775)
    .add({
      targets: document.querySelectorAll(".subtitle"),
      opacity: [0, 1],
      scaleIn: [0.2, 1],
      durationIn: 200
    })
      .add({
        targets: document.querySelector(this.titleId),
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 200
      })

      anime({
        targets: document.querySelector('.line'),
        keyframes: [
          {opacity: 1},
          {opacity: 0},
          {opacity: 1}
        ],
        duration: 1000,
        loop: true
      })
  }

    render(){
      const title = this.props.title;
      const subtitles = this.props.subtitles; 
        return(
          <Root titleId={this.titleId}>
            <Typography id={this.titleId.substr(1)}variant="h1" align='center'>
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters" dangerouslySetInnerHTML={{__html: title.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")}} />
            </span>
            </Typography>
            {
              subtitles && subtitles.map((title, index) => (
                <Typography key={index} variant="subtitle1" component='h1' align='center' className="subtitle">
                  {title}
                </Typography>
              ))
            }
          </Root>
        )
    }
}

const Root = styled.div`
  ${props => props.titleId} .text-wrapper {
    position: relative;
    display: inline-block;
  }

  ${props => props.titleId} .letter {
    display: inline-block;
    line-height: 1em;
  }

  ${props => props.titleId} .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${Colors.primary};
    transform-origin: 0 50%;
  }

  ${props => props.titleId} .line1 { 
    top: 0; 
    left: 0;
  }
`

AnimatedTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string)
}


export default AnimatedTitle