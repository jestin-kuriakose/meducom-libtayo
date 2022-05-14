import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import Login from '../components/Login'
import Posts from '../pages/Posts'
import TopNav from '../components/TopNav'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
   // align-items: center;
    justify-content: center;
    background-size: cover;
`

const Meducom = () => {
    const {isFetching, error} = useSelector((state)=>state.user)

    const user = useSelector((state)=> state.user)
    const cUser = user.currentUser === null;
    const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser === null
    console.log("Token-" + TOKEN)
  return (
    <div>
    <TopNav/>
    
    <Container>
        <Login/>

    </Container>
    </div>
  )
}

export default Meducom