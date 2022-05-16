import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login, logout } from "../redux/apiCalls"
import { useNavigate } from 'react-router-dom'
import { userRequest } from '../requestMethods'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
   // align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 10px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #164589;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [speciality, setSpeciality] = useState("");
    
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const {isFetching, error} = useSelector((state)=>state.user)

    const user = useSelector((state)=> state.user)
    const cUser = user.currentUser ? user.currentUser : false;
 //const cUser = false;

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
 
        navigate('/posts');
    }
    

    // useEffect(()=> {
    //     const makeRequest = async() => {
    //         try {
    //             const res = await userRequest.put(`/users/${cUser._id}`, {
    //                 firstname: firstName,
    //                 lastname: lastName,
    //                 city: city,
    //                 speciality: speciality
    //             })

    //         } catch(err){
    //             // navigate('/login')
    //         }
    //     }
    //     makeRequest()
    // },[firstName, lastName, cUser])

  return (
    <Wrapper>
        
    {cUser && <p>user: {cUser.username}</p>}
    <Title>SIGN IN</Title>
    <Form>
        <Input disabled={cUser ? true:false} placeholder="username/email" onChange={(e)=>setUsername(e.target.value)}/>
        <Input disabled={cUser ? true:false} placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={handleClick} disabled={isFetching || cUser}>LOGIN</Button>

        { error && <p>Please check your credentials</p>}
        
    </Form>
</Wrapper>
  )
}

export default Login