import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchPost from './SearchPost'
import './Posts.css'
import { fetchPosts } from './redux/slice/postSlice'

const PostsList = () => {
  // useSelector = grab data out of the store
  // useDispatch = send data to the store
  const dispatch = useDispatch()

  useEffect(() => {
    //when the componet first load - and successful -get all the data from the api
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts 100</h1>
        <div className='post-details'>
          <h3>Post Title 1</h3>
          <p>Post body 1</p>
        </div>
      </div>
    </>
  )
}

export default PostsList
