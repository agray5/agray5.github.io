import React, { Component } from 'react'

//Depends
import styled from 'styled-components';
import Img from "gatsby-image"

//Components
import Layout from '../components/layout'

import Title from '../components/title'
import Constellations from '../components/constellations'
import {media, mediaMax} from '../utils/mediaQueries'

//Assets 
import theme, {Colors} from '../theme'
import Attribute from '../components/attribute';

const IndexPage = (props) => (
  <Layout>
        <Root id="container">
            <Title theme={theme} title="April Gray" subtitles={["Mobile/Web/Software", "Developer"]}/>
            <StyledImg fluid={props.data.wolf.childImageSharp.fluid}/>
            <StyledConstellations width={window.innerWidth/2} height={window.innerHeight}/>
            <Attribute href="https://unsplash.com/photos/wK_DZlAJJ_Q" author="Grégoire Bertaud" />
        </Root>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    wolf: file(relativePath: { eq: "wolf.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }`

const Root = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(${Colors.primary} 0%,rgba(0,0,0,1) 70%);

    ${media.desktop`background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);`}
`;

const StyledConstellations = styled(Constellations)`
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    ${media.desktop`display: block;`}
`

const StyledImg = styled(Img)`
    position: absolute !important;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    transform: scaleX(-1);

    width: 50%;
    height: 50%
    ${media.desktop`width: 50%;`}
    ${mediaMax.desktop`height: 50%;`}
`;
