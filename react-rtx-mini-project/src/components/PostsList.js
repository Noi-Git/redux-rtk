import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchPost from './SearchPost'
import './Posts.css'
import { fetchPosts } from './redux/slice/postSlice'

const PostsList = () => {
  // useSelector = grab data out of the store and display on the ui
  // useDispatch = send data to the store
  const dispatch = useDispatch()

  useEffect(() => {
    //when the componet first load - and successful -get all the data from the api
    dispatch(fetchPosts())
  }, [dispatch])

  //Get data from store -- before destructure
  /*const postsData = useSelector((state) => {
    return state.posts
  })
  console.log(postsData)
  */

  const { posts, loading, error } = useSelector((state) => {
    return state.posts
  })
  // console.log(posts)

  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts 100</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2 style={{ color: 'red' }}>{error}</h2>
        ) : (
          posts.map((post) => {
            return (
              <div className='post-details' key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default PostsList
