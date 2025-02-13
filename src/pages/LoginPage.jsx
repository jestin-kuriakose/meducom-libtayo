import React from 'react'
import Login from '../components/Login'
import TopNav from '../components/TopNav'
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
   // align-items: center;
    justify-content: center;
    background-size: cover;
`

const LoginPage = () => {
  return (
    <div>
    <TopNav/>
    <Container>
        <Login/>

    </Container>
    </div>
  )
}

export default LoginPage