import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"

//Depends
import styled from 'styled-components';
import Title from '../components/title'
import SideImageGrad from '../components/sideImageGrad'

//Assets 
import theme, {Colors} from '../theme'
import {media} from '../utils/mediaQueries'

const ContactPage = (props) => (
  <Layout>
    <StyledDiv id="contactContainer">
    <Title title="Contact Me" theme={theme}/>
        <form action="https://formspree.io/aprgray5@gmail.com" method="POST">
            <ul class="formUL">
                <li class="form-group">
                    <input type="text" name="name" class="input-control" placeholder="Name" /> 
                    <input type="email" name="_replyto" class="input-control" placeholder="Email" />
                </li>
                <li class="form-group">
                    <input type="text" name="subject" class="input-control" placeholder="Subject" />
                </li>
                <li class="form-group">
                    <textarea name="message" class="input-control field-textarea" placeholder="Message"></textarea>
                </li>
                <li class="form-group">
                    <input class="btn input-control" type="submit" value="Send" />
                </li>
            </ul>
        </form> 
        
        <SideImageGrad img={props.data.letter.childImageSharp.fluid} 
                       href="https://unsplash.com/photos/0gkw_9fy0eQ?utm_source=unsplash" 
                       author="Patrick Fore"/>
    </StyledDiv>
  </Layout>
)

export const query = graphql`
  query {
    letter: file(relativePath: { eq: "letter.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 820) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      },
  }`


const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(${Colors.primary} 0%,#0d1718 70%);
    ${media.desktop`background: linear-gradient(to right, ${Colors.primary} 0%,#0d1718);`}

    & form {
    
    & ul {
	    max-width: 500px;
	    padding: 30px 22px 20px 30px;
        font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        
        & li {
            padding: 0;
	        display: block;
	        list-style: none;
            
            display: flex;
            flex-direction: column;
        }

        & .input-control {
            box-sizing: border-box;
            border:1px solid #BEBEBE;
            outline: none;	

            flex: 1 1 auto;
            display: block;
            margin: 16px 8px 0 10px;
            padding: 8px;

            &:focus {
                box-shadow: 0 0 8px #88D5E9;
	            border: 1px solid #88D5E9;
            }
        }

        & .btn {
            padding: 5px 15px;
            max-width: 100px
        }


        & .field-textarea {
            height: 150px;
        }


        ${media.tablet`
            margin-top: 20px;
            margin-left: 10%;

            li {
                flex-direction: row;
            }
            
            .input-control {
                margin-top: 10px;
            }
        `}
    }
}
`

const StyledImg = styled(Img)`
    display: none;
    position: absolute !important;
    right: 0px;
    top: 0px;
    z-index: 1;
    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 85%);

    width: 50%;
    height: 100%;
    ${media.desktop`display: block;`}
`;

export default ContactPage
