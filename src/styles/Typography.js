import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';

export default styled(Typography)`
  z-index: 2;
  ${props => genBreakPoints(props.variant)}
`


const variantSizes = {
  h1: 4,
  h2: 3
}
const breakPoint = [['xs', 2], ['sm', 1], ['md', 0]];
const getFontSize = (variant) => {
  variant = variantSizes[variant];
  if(!variant) return 'initial';
  return variant+"rem";
}

const genBreakPoints = (variant) => {
  let breakPoints = "";
  breakPoint.forEach(bp => {
    breakPoints += `${theme.breakpoints.only(bp[0])} {
      font-size: ${getFontSize(variant)} !important;
    }
    `;
  });
  return breakPoints;
}
