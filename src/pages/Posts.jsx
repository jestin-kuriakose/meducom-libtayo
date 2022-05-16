import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'
import { userRequest } from '../requestMethods'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Forums from '../components/Forums'
import Forum from '../components/Forum'

const Container = styled.div`
    widTh: 100vw;
    height: 100vh;
    display: flex;
    //align-items: center;
    justify-content: center;
    background-size: cover;
`
const Table = styled.table``
const Td = styled.td`
border: 1px solid #ddd;
  padding: 8px;
`
const Th = styled.th`
border: 1px solid #ddd;
  padding: 8px;
`

const Posts = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const {isFetching, error} = useSelector((state)=>state.user)

    const user = useSelector((state)=> state.user)
    const cUser = user.currentUser ? user.currentUser : false;

    useEffect(()=> {
    
        const getUsers = async () => {
            if(cUser) {

            try {
                const res = await userRequest.get(`/users`)
                setUsers(res.data)
            } catch(err) {
                console.log(err)
            }
            } else {
                navigate('/login')
            }
        }
        getUsers()
    }, [])
    const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser === null
    console.log("Token-" + TOKEN)
  return (
    <div>
        <TopNav/>
        <Container>
            <Forums>
                <Forum></Forum>
            </Forums>
        </Container>
    </div>
  )
}

export default Posts