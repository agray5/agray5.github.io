import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
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
        <Header siteTitle={data.site.siteMetadata.title} />
          {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
