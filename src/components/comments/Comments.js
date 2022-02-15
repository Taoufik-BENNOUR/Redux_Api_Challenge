import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import CommentsCard from './CommentsCard'

const Comments = () => {
    const {userI,postI}=useParams()
    const comment = useSelector(state=>state.commentsReducer.comments)
  return (<>
    <div style={{margin:'150px 50px'}}>
    <LinkContainer to={`/userPosts/${userI}`} style={{width:50,cursor:'pointer',display:'block',marginLeft:'auto'}}><img src='http://cdn.onlinewebfonts.com/svg/img_68649.png'></img></LinkContainer>
      {comment.map(el=>postI==el.postId?<CommentsCard comments={el} key={el.id}/>:null)}</div>
  </>)
}

export default Comments