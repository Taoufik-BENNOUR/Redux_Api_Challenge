import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import { getComments } from '../../redux/actions/userActions'
import CommentsCard from './CommentsCard'

const Comments = () => {
    const {userI,postI}=useParams()
    const dispatch = useDispatch()
    const comment = useSelector(state=>state.commentsReducer.comments)
    const [commentsCount, setCommentsCount] = useState()

    useEffect(() => {
      
      dispatch(getComments(postI))
      setCommentsCount(comment.length)

    }, [])
    

  return (<>
    <div style={{margin:'150px 50px'}}>
      <h6>Comments : {commentsCount}</h6>
    <LinkContainer to={`/userPosts/${userI}`} style={{width:50,cursor:'pointer',display:'block',marginLeft:'auto'}}><img src='http://cdn.onlinewebfonts.com/svg/img_68649.png'></img></LinkContainer>
      {comment.map(el=><CommentsCard comments={el} key={el.id} commentsCount={commentsCount} />)}</div>
  </>)
}

export default Comments