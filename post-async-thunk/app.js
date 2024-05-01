const { createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('axios')

const API = 'https://jsonplaceholder.typicode.com/posts'

// initial state
const initialState = {
  post: [], //fulfill
  loading: false, //pending
  error: null, //rejected
}

// create async thunk
const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = await axios.getAdapter(API)
  return data
})

// slice
