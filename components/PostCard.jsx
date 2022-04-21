import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
      <div className=''>{post.title}</div>
      <div>{post.exert}</div>
    </div>
  )
}

export default PostCard