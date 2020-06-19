import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostDetails(props: any) {
  const [post, setPost] = useState<any>({})

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + props.match.params.post_id)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container center">
      <h2>Post Detail</h2>
      <div className="post card green" style={{ padding: 20, textAlign: 'left'}}>
        <h4 className="yellow-text">{post.title}</h4>
        <p className="white-text">{post.body}</p>
      </div>
    </div>
  )
}

export default PostDetails
