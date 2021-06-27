import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./action";

const Posts = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])


  const renderPosts = () => {
    if (state.isLoading) {
      return <h1>Loading...</h1>
    }
    return (state.items.map(post => (<h2>{post.title}</h2>)))
  }


  return (
      <div>{renderPosts()}</div>
      // <div>{ posts.map(post => ( <h2>{post.title}</h2> )) }</div>
  )
}

export default Posts;