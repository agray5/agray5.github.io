import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"

//Depends
import styled from 'styled-components';
import Title from '../components/atom/title'
import SideImageGrad from '../components/sideImageGrad'

//Assets 
import theme, {Colors} from '../theme'
import {media} from '../utils/mediaQueries'
import SkillList from '../components/skillslist';

const skillNames = ["react"]

const AboutPage = (props) => (
  <Layout>
    <StyledDiv id="aboutContainer">
        <Title theme={theme} title="About Me"/>
        <StyledTextContainer>
            <p> <i>Technology shapes everything, from growing enterprises to our daily routines. </i></p>
            <p> I graduated with a Bachelor's in Computer Science in 2018, during which 
                I learned many important basics, such as networking, and databases.</p>
            <p> Through my love of learning, and passion for coding, I am also self taught 
                in web development, with experience in React, Redux, Sass, and other web frameworks.</p>
            <p> Since the Summer of 2018 I have done freelance work involving React, Angular, Android, IOS, and other technologies. </p> 
        </StyledTextContainer>

        {/*<SkillList skillNames={skillNames} />*/}
        
        <SideImageGrad img={props.data.dog.childImageSharp.fluid} 
                       href="https://www.vecteezy.com/vector-art/139760-border-collie-silhouette-free-vector" 
                       author="www.vecteezy.com"/>
        
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
      },
  }`

const StyledTextContainer = styled.div`
  margin-left: 10%;
  height: 80%;
  width: 80%
  overflow-y: auto;
  color: ${Colors.menu};
  ${media.desktop`width: 40%; margin-top: 70px;`}
`;

const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(${Colors.primary} 0%,#c6567f 70%);
    ${media.desktop`background: linear-gradient(to right, ${Colors.primary} 0%,#c6567f);`}
`

export default AboutPage
