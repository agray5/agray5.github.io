import React from 'react';
import { Box, Grid }  from '@material-ui/core';
import PropTypes from "prop-types"
import ExtraPropTypes from 'extended-proptypes'
import styled from 'styled-components';
import { darken } from 'polished'
import { Typography } from '@material-ui/core';


const Levels = ["Novice", "Beginner", "Intermediate", "Advanced", "Expert"]
const Bar = ({name, levels = Levels, level = 1, color = "#808080" }) => {
  const percent = percentage(level, levels.length);
  return (
    <Root position="relative" percent={percent} segmentPercent={100/levels.length} color={color}>
      <Box className="skill-bar-name" ><Box>{name}</Box></Box>
      <Box className="skill-bar" bgcolor={color} width={`calc(${percent}% - 30px)`}>
      </Box>
      <Box className="skill-bar-names" >
      {
         levels.map((level, index) => (
          <Box key={index} className="skill-name">
            <Typography>{level}</Typography>
          </Box>
        ))
       }
       </Box>
    </Root>
  )
}

const percentage = (nom, dom) => {
  return nom/dom * 100;
}

const Root = styled(Box)`
   --name-width: 60px;

  width: calc(100% - 30px);
  height: 100%;
  background-color: #ddd;
  display: flex;
  padding-right: 2px;
  

  &:first-child {
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 2px;
  }

  & .skill-bar-name {
    padding-left: 4px;
    min-width: 60px;

    &:first-child {
      display: table-cell;
    }
  }

  & .skill-bar-names {
    width: calc(100% - var(--name-width)); 
    left: var(--name-width); 
    position: absolute; 
    color: red;

    & .skill-name {
      width: 20%; 
      display: inline-block; 
      text-align: center;
      color: gray;
      /*width: ${props => props.segmentPercent}%;*/
    }
  }

  & .skill-bar {
    height: 100%;
    display: inline-block;
    /*border-right: 1px solid ${props => darken(0.2, props.color)};*/
    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);
  }
` 

Box.propTypes = {
  name: PropTypes.string.isRequired,
  color: ExtraPropTypes.color
}
//rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;
export default Bar;