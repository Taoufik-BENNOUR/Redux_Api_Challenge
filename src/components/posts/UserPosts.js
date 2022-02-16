import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import { getPosts } from '../../redux/actions/userActions'
import Posts from './Posts'

const UserPosts = () => {
    const dispatch = useDispatch();
    const {userI}=useParams()
    const posts = useSelector((state)=>state.postsReducer.posts)
    useEffect(() => {
      dispatch(getPosts(userI))
    }, [])
     
  return (
    <div style={{margin:'100px 12%'}}>
          <LinkContainer to={`/`} style={{width:50,cursor:'pointer',display:'block',marginLeft:'auto'}}><img src='http://cdn.onlinewebfonts.com/svg/img_68649.png'></img></LinkContainer>
      <h4>Posts</h4>
      
      {posts.map((el)=><Posts post={el} key={el.id}  /> )}
      </div>
    
  )
}

export default UserPosts