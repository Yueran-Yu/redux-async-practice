import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchPosts} from "./action";

const Posts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
      <div>

      </div>
  )
}

export default Posts;