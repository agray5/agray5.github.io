import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Header from './header'
import theme from '../theme'
import './layout.css'
import UserStatus from '../../src/components/molecule/UserStatus';

const Layout = ({ children }) => (
      <>
        <UserStatus />
        {children}
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
