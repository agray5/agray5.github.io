import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"

//Depends
import styled from 'styled-components';

import Title from '../components/title'

//Assets 
import theme, {Colors} from '../theme'
import {media, mediaMax} from '../utils/mediaQueries'
import Attribute from '../components/attribute'

const AboutPage = (props) => (
  <Layout>
    <StyledDiv id="aboutContainer">
        <Title theme={theme} title="About Me"/>
        <StyledTextContainer>
            <p>Technology shapes everything, from growing enterprises to our daily routines. </p>
            <br />
            <p> I graduated with a Bachelor's in Computer Science in 2018, during which 
                I had many useful courses such as, Networks, Operating-Systems, Databases, 
                and other standard classes.</p>
            <p> My love of learning, and passion for coding however, would not allow me to 
                just be satisfied with the curriculum. I am also self taught in web development,
                with experiance in React, Gatsby, Sass, and other web frameworks.</p>
            <p> Starting in the Summer of 2018 I have done freelance work creating Android 
                and IOS applications. </p> 
        </StyledTextContainer>
        <StyledImg fluid={props.data.dog.childImageSharp.fluid}/>
        <Attribute href="https://www.vecteezy.com/vector-art/139760-border-collie-silhouette-free-vector" author="www.vecteezy.com"/>
    </StyledDiv>
  </Layout>
)


export const query = graphql`
  query {
    dog: file(relativePath: { eq: "Border Collie Silhouette.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 820) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }`

const StyledTextContainer = styled.div`
  margin-top: 70px;
  margin-left: 10%;
  width: 40%;
  color: ${Colors.menu}
`;

const StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(${Colors.primary} 0%,rgba(0,0,0,1) 70%);
    ${media.desktop`background: linear-gradient(to right, ${Colors.primary} 0%,#c6567f);`}
`

const StyledImg = styled(Img)`
    position: absolute !important;
    right: 0px;
    top: 0px;
    z-index: 1;
    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 85%);

    width: 60%;
    height: 100%
    ${media.desktop`width: 50%;`}
    ${mediaMax.desktop`height: 50%;`}
`;


export default AboutPage
