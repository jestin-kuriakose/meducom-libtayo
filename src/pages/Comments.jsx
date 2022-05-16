import React from 'react'
import Login from '../components/Login'
import TopNav from '../components/TopNav'
import styled from "styled-components"
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
   // align-items: center;
    justify-content: center;
    background-size: cover;
`

const Comments = () => {
  const location = useLocation()
  const forumId = location.pathname.split("/")[2];
  return (
    <div>
    <TopNav/>
    <Container>
        

    </Container>
    </div>
  )
}

export default Comments