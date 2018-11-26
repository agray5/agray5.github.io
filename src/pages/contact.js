import React from 'react'
import Layout from '../components/layout'

//Depends
import styled from 'styled-components';
import Title from '../components/title'

//Assets 
import theme, {Colors} from '../theme'
import {media, mediaMax} from '../utils/mediaQueries'

const ContactPage = () => (
  <Layout>
    <StyledDiv id="contactContainer">
    <Title title="Contact Me" theme={theme}/>
        <form action="https://formspree.io/aprgray5@gmail.com" method="POST">
            <ul class="formUL">
                <li class="fieldDividerContainer">
                    <input type="text" name="name" class="field-divided" placeholder="Name" /> 
                    <input type="email" name="_replyto" class="field-divided" placeholder="Email" />
                </li>
                <li>
                    <input type="text" name="subject" class="field-long" placeholder="Subject" />
                </li>
                <li>
                    <textarea name="message" class="field-long field-textarea" placeholder="Message"></textarea>
                </li>
                <li>
                    <input type="submit" value="Send" />
                </li>
            </ul>
        </form> 
    </StyledDiv>
  </Layout>
)

const StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow:hidden;

    ${media.desktop`background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);`}

    & form {
        padding-top: 20px;
        margin-left: 12%;

    
    & ul {
	    max-width: 500px;
	    padding: 30px 22px 20px 30px;
        font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        
        & li {
            padding: 0;
	        display: block;
	        list-style: none;
	        margin: 10px 0 0 0;
        }

        & input, textarea {
            box-sizing: border-box;
            border:1px solid #BEBEBE;
	        padding: 15px;
            margin:0px;
            outline: none;	

            &:focus {
                box-shadow: 0 0 8px #88D5E9;
	            border: 1px solid #88D5E9;
            }
        }

        & .fieldDividerContainer {
            display: flex;
            justify-content: space-between;

            & input {
                width: 49%;
            }
        }

        & .field-long {
            width: 100%;
        }

        & .field-textarea {
            height: 150px;
        }

        & input[type=submit], & input[type=button] {
            background: #4B99AD;
	        padding: 8px 15px 8px 15px;
	        border: none;
            color: #fff;
            
            &:hover {
                background: #4691A4;
	            box-shadow:none;
            }
        }
    }
}
`

export default ContactPage
