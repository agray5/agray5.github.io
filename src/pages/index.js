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
import {Colors} from '../theme'


const IndexPage = (props) => (
  <Layout>
        <Root id="container">
            <Title title="April Gray" subtitles={["Mobile/Web/Software", "Developer"]}/>
            {StyledImg(props)}
            <StyledConstellations width={window.innerWidth/2} height={window.innerHeight}/>
        </Root>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query allImgsQuery {
    wolf: file(relativePath: { eq: "wolf.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
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
    display: none;
    position: absolute;
    right: 0;
    top: 0;

    ${media.desktop`display: block;`}
`

const StyledImg = (props) => styled(<Img fixed={props.data.wolf.childImageSharp.fixed}/>)`
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    transform: scaleX(-1);

    ${media.desktop`width: 50%;`}
    ${mediaMax.desktop`height: 50%;`}
`;
