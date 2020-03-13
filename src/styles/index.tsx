import React from "react";
import { Component } from 'react';
import styled, { AnyStyledComponent, ThemedStyledProps, StyledComponentPropsWithRef } from 'styled-components';

import theme from '../theme'

export type jssValue = string | number;
export const maybe = <T extends any>(name: string, value: T) => `${name}: ${value || 'unset'}${typeof value === 'number'?'px':''};`;

export const DarkContained = () => `
  background-color: ${theme.palette.background.dark} !important;
  color: ${theme.palette.primary.main} !important;
`
export const Absolute = ({top, left, right, bottom}: {top?: jssValue, left?: jssValue, right?: jssValue, bottom?: jssValue} = {}) => 
  () => `
  position: absolute !important;

  ${maybe('top', top)}
  ${maybe('bottom', bottom)}
  ${maybe('left', left)}
  ${maybe('right', right)}
`

export const Depth = (amount: 1 | 2 | 3 | 4) => () => `
  z-index: ${amount};
`

export const applyStyles = <C extends typeof Component>(comp: C, ...styles: ((props: ThemedStyledProps<StyledComponentPropsWithRef<C> & {}, any>) => string)[]) => {
  return styled(comp)`
    ${props => styles.map(style => style(props)).join('')}
  `
}