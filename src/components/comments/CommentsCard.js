import React from 'react'

const CommentsCard = ({comments:{name,body},commentsCount}) => {
  return (
    <div>
        <h4>{name}</h4>
        <p>{body}</p>
        </div>
  )
}

export default CommentsCard