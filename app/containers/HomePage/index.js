/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import wolf from 'images/wolf.jpg';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {

  render() {
    return (
      <Root id="root">
        <StyledBar position="static" color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </StyledBar>
        <StyledImg src={wolf} />
      </Root>
    );
  }
}



export default HomePage;

let StyledBar = withStyles({
  root: {
    boxShadow: 'none',
    background: 'none'
  }
})(AppBar);

const Root = styled.div`
  background: linear-gradient(to right, rgba(30,87,153,0) 0%,rgba(8,8,10,1) 100%);
`;

const StyledImg = styled.img`
  height: 50%;
  width: 50%;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
