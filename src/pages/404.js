import React from 'react'
import Layout from '../components/layout'

//Depends
import styled from 'styled-components';

const NotFoundPage = () => (
  <Layout>
    <StyledDiv id="404Container">
        <h1>NOT FOUND</h1>
        <p>This page doesn't exsist</p>
    </StyledDiv>
  </Layout>
)

const StyledDiv = styled.div`
    margin-left: 20%;
    padding-top: 10%;
`

export default NotFoundPage
