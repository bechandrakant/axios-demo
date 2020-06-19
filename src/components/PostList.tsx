import React from 'react'
import { Link } from 'react-router-dom'

const PostList = (props: { posts: { id: string | number | undefined; title: React.ReactNode; body: React.ReactNode }[] | null }) => {

  const renderPostList = (props.posts !== null) ? props.posts.map((post: { id: string | number | undefined; title: React.ReactNode; body: React.ReactNode }) => 
      <Link to={"/" + post.id} key={post.id}>
        <div className="post card" style={{ padding: 10}}>
          <span className="card-title red-text">{post.title}</span>
          <p>{post.body}</p>
        </div>
      </Link>
    ): 
    <div className="post card" key="12345">
      <span className="card-title">You have no posts!</span>
    </div>

  return <div>{renderPostList}</div>
}

export default PostList
