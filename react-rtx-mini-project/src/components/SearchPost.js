import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Form.css'
import { searchPosts } from './redux/slice/postSlice'

const SearchPost = () => {
  const dispatch = useDispatch()
  //search form state
  const [search, setSearch] = useState('')
  //search form submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(search)
    dispatch(searchPosts(search))
  }

  return (
    <div className='form-header'>
      <div>
        <h2>React Redux Project</h2>
        <p>
          This project is a simple React Redux project that fetches data with
          search functionality from an API
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search for a post'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchPost
