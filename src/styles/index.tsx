import React from "react";
import { Component } from 'react';
import styled, { AnyStyledComponent, ThemedStyledProps, StyledComponentPropsWithRef } from 'styled-components';

import theme from '../theme'


export const DarkContained = () => `
  background-color: ${theme.palette.background.default};
  color: blue;
`
const U = () => (
  <div>OKOOJO</div>
);

const K = styled(U)`
  color: blue;
`

export const applyStyles = <C extends typeof Component>(comp: C, ...styles: ((props: ThemedStyledProps<StyledComponentPropsWithRef<C> & {}, any>) => string)[]) => {
  return K
}