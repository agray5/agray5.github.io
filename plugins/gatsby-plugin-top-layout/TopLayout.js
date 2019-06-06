import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../../src/theme';
import Header from '../../src/components/header';

const TopLayout = ({ children }) => (
      <>
        <Helmet
          meta={[
            { charset: 'utf-8', content:"text/html"},
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            { name: 'description', content: 'Hi, I\'m April Gray. I build applications for web, mobile, and desktop use.' },
          ]}
        >
          {/** Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Oxygen+Mono|Sacramento" rel="stylesheet" />
          <html lang="en" />
        </Helmet>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
        </MuiThemeProvider>
      </>
)

TopLayout.propTypes = {
  children: PropTypes.node,
};

export default TopLayout