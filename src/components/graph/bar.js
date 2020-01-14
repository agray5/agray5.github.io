import React from 'react';
import Box  from '@material-ui/core/Box';
import PropTypes from "prop-types"
import ExtraPropTypes from 'extended-proptypes'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';


const Levels = ["Novice", "Beginner", "Intermediate", "Advanced", "Expert"]
const Bar = ({name, levels = Levels, level = 1, color = "#808080" }) => {
  const percent = `${percentage(level, levels.length)}%`;
  return (
    <Root>
      <Box px={2}><Box display="table-cell">{name}</Box></Box>
      <Box className="skill-bar" bgcolor={color} width={`${percentage(level, levels.length)}%`}>
      </Box>
      <Box display="inline-block" ml={`-${}`}>
      {
         levels.map((level, index) => (
          <Box key={index} borderRight="" className="skill-name">
            <Typography>{level}</Typography>
          </Box>
        ))
       }
       </Box>
    </Root>
  )
}

const percentage = (nom, dom) => {
  console.log("Percentaghe", nom/dom * 100)
  return nom/dom * 100;
}

const Root = styled(Box)`
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

  & .skill-bar {
    height: 100%;
    display: inline-block;

    & .skill-name {
      display: "inline-block"
    }
  }
` 

Box.propTypes = {
  name: PropTypes.string.isRequired,
  color: ExtraPropTypes.color
}

export default Bar;