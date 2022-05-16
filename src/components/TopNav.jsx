import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../redux/apiCalls'



const Container = styled.div`
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    width: 10%;
    border: none;
    padding: 15px 20px;
    margin: 0 20px;
    background-color: #164589;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Image = styled.img`
    object-fit: cover;
`


const TopNav = () => {
  const user = useSelector((state)=> state.user)
  const cUser = user.currentUser ? user.currentUser : false;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    logout(dispatch)
    navigate('/')
  }

  return (
    <div>
        <Container>
            <Image src='https://i.ibb.co/K95LPkx/image.jpg'/>
            {cUser && <Button onClick={handleLogout}>LOGOUT</Button>}
        </Container>
        <Link to={'/'}><Button>Home</Button></Link>
        <Link to={'/posts'}><Button>Posts</Button></Link>
        <Link to={'/login'}><Button>Login</Button></Link>

    </div>
  )
}

export default TopNav