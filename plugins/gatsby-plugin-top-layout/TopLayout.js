import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';
import Header from '../../src/components/header';

import { links } from '../../config.js';

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
          <Header links={links}/>
          {children}
        </MuiThemeProvider>
      </>
)

TopLayout.propTypes = {
  children: PropTypes.node,
};

export default TopLayout