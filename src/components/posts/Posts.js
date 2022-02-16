import React from 'react'
import { Link } from 'react-router-dom'

function Posts({post,len}) {
  return (
      <div style={{margin:'10px',border:'2px solid orange'}}>
        
          <h4 style={{backgroundColor:'rgba(255, 165,0, 0.2)',textAlign:'center'}}>{post.title}</h4>
        <p style={{margin:20}}>{post.body}
        <Link to={`/userPosts/${post.userId}/${post.id}`}> <div>See more comments </div></Link>
         </p><h1>{len}</h1>
      </div>
  )
}

export default Posts