import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./action";

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state).slice(0,10)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
      <div>{
        posts.map(post => (
           <h2>{post.title}</h2>
        ))
      }
      </div>
  )
}

export default Posts;