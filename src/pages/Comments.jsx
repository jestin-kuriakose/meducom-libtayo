import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import TopNav from '../components/TopNav'
import styled from "styled-components"
import { useLocation } from 'react-router-dom'
import { userRequest } from '../requestMethods'

const Container = styled.div`
    // width: 60vw;
    // height: 60vh;
    display: flex;
    flex-direction: column;
   //align-items: center;
    justify-content: center;
    background-size: cover;
    padding: 0 40px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentSection = styled.div`
    display: flex;
    flex-direction: column;
   align-items: center;
    justify-content: center;
    background-color: #d51878;
    color: white;
    padding: 0 40px;
    width: 70%;
    // height: 100vh;
`

const CommentInput = styled.input`
  width: 100%;
  height: 50px;
  text-area: 100;
`

const Button = styled.button`
  background-color: white;
  height: 50px;
  width: 80px;
  font-weight: bold;
`

const Comments = () => {
  const location = useLocation()
  const forumId = location.pathname.split("/")[2];
  const [newComment, setNewComment] = useState([])

  const [forum, setForum] = useState({})
    useEffect(()=> {
        const getForum = async () => {
            try {
                const res = await userRequest.get(`/forums/find/${forumId}`)
                setForum(res.data)
            } catch(err) {

            }
            
        }
        getForum()
    }, [])
    // console.log(forum)

    const handleChange = (e) => {
      setNewComment((prev) => [...prev, {comments : e.target.value}])
    }
    console.log(newComment)

    const handleClick = (e) => {
      e.preventDefault();
      try {
        
        const res = userRequest.put(`/forums/${forumId}`, {
          comments: newComment
        })
        console.log(res)
      } catch (err) {}
      
    }
  return (
    <div>
    <TopNav/>
    <Container>
      <Info>
        <h1>{forum.title}</h1>
        <p>{forum.heading}</p>
        {forum.questions && forum.questions.map((question)=>
          <p>{forum.questions.indexOf(question)+1}{"."} {question}</p>
          )}
      </Info>
        <CommentSection>
          <h4>Comments</h4>
        {forum.comments && forum.comments.map((comment)=>
          <p>{comment.comments}</p>
          )}
          <label>Post a comment</label>
          <CommentInput name='comments' type='text' onChange={handleChange}/>
          <Button onClick={handleClick}>POST</Button>
        </CommentSection>
    </Container>
    </div>
  )
}

export default Comments