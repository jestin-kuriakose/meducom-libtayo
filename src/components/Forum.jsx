import React, { useState } from 'react'
import styled from "styled-components"
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Comment = styled.a`
    color: #E1007A;
    font-weight: bold;
    cursor: pointer;
`

const Forum = ({forum}) => {
    const [toggleComment, setToggleComment] = useState(false)
    const handleComments = (e) => {
        toggleComment ? setToggleComment(false) : setToggleComment(true)
        
    }
    console.log(forum._id)
  return (
    <div>
        <h3>{forum.title}</h3>
        <p>{forum.heading}</p>
        {forum.questions.map((question)=> (
            <p>{forum.questions.indexOf(question)+1}{"."} {question}</p>
        ))}
        <Link to={'/comments/'+forum._id}> <Comment>{forum.comments.length} Comments</Comment></Link>
        
    </div>
  )
}

export default Forum