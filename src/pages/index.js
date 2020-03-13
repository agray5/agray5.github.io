import React, { Component } from 'react'

//Depends
import styled from 'styled-components';
import Img from "gatsby-image"
import withSizes from 'react-sizes'
import Container from '@material-ui/core/Container';
import Typography from '../styles/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import background from "../images/night.jpg"
import forest from "../images/forest.png"
import WordCloud from "../images/wordcloud.svg"

//Components

import Constellations from '../components/constellations'
import withWidth from '@material-ui/core/withWidth';

//Assets 
import theme, {Colors} from '../theme'
import Attribute from '../components/attribute';
import { transparentize } from 'polished';
import LetterRain from '../components/letterRain';
import LineDrawing from '../components/lineDrawing';
import AnimatedTitle from '../components/animatedTitle';
import Layout from '../components/layout';


const mapSizesToProps = ({width, height}) => ({
    width: width?width:800,
  height: height?height:700,
});

const IndexPage = ({theme, data, width}) => (
  <Layout>
  <Root maxWidth={false}>
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <HalfBox display="flex" flexDirection="column" justifyContent={width==='lg'?"center":"start"}>
            <AnimatedTitle title="April Gray" subtitles={["Web & Software", "Developer"]} />
          </HalfBox>
        </Grid>
          <Grid item xs={12} md={6}>
            <LineDrawing svg={WordCloudStyled} delay={1100} delayMax={3000}/>
            <Attribute href="https://unsplash.com/@nathananderson" author="Anderson" />
            {/*<Title theme={theme} title="April Gray" subtitles={["Mobile/Web/Software", "Developer"]}/>*/}
            {/*<StyledImg fluid={data.wolf.childImageSharp.fluid}/>
            <StyledConstellations {...mapSizesToProps(withSizes)}/>
            <Attribute href="https://unsplash.com/photos/wK_DZlAJJ_Q" author="Grégoire Bertaud" />
          */}
            </Grid>
    </Grid>
  </Root>
  </Layout>
)

export default withWidth()(IndexPage)

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
      }, 
      night: file(relativePath: { eq: "night.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }`

const HalfBox = styled(Box)`
  position: absolute;
  height: 100%;
  top: 15%;
  left: 15%;

  ${theme.breakpoints.down('sm')} {
    margin-top: 15%;
  }
`

const Root = styled(Container)`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    //background: linear-gradient(${Colors.primary} 0%,rgba(0,0,0,1) 70%);
    background: radial-gradient( circle farthest-corner at 10% 20%,  ${Colors.primary_dark} 0%, ${transparentize(0.15, Colors.grad)} 81.3% ),
    //linear-gradient(90deg, rgba(2,0,36,0) 0%, ${transparentize(0.5, Colors.grad)} 100%), 
        url(${forest}) no-repeat center center fixed,
        url(${background}) no-repeat center center fixed;
    background-size: cover;

    ${theme.breakpoints.up('md')} {
      //background: linear-gradient(to right, ${Colors.primary} 0%,${Colors.grad} 70%, #000 100%);
      background-size: cover;
    }
    /*media.desktop background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);*/
`;

const WordCloudStyled = styled(WordCloud)`
  user-select: none;
  position: absolute; 
  bottom: 0;
  right: 5%;
  margin-left: 15%;

  ${theme.breakpoints.down('sm')} {
    display: none;
  }
  
    &  text {
      fill: none;
      //stroke: #51256f;
      stroke-width: 0.5px;
      stroke-dashoffset: -1000;
      stroke-dasharray: 1000;
      //stroke-linecap: butt;
      stroke-linejoin: round;
    }
`

const StyledConstellations = styled(Constellations)`
    display: none;
    right: 0;
    top: 0;

    ${theme.breakpoints.up('md')} {
      display: block;
    }
    
`

const StyledImg = styled(Img)`
    position: absolute !important;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    transform: scaleX(-1);
    overflow: visible !important;

    width: 100%;

    ${theme.breakpoints.up('md')} {
      width: 50%;
      height: 50%;
    }
`;
