import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostList from './PostList'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetails from './PostDetails'

function Home() {
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data.slice(0, 10))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" 
            render={(props) => (
              <PostList {...props} posts={posts} />
            )}/>
          <Route path="/:post_id" component={PostDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Home
