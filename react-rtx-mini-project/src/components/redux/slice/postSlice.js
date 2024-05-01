import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import apiURL from '../../utils/apiURL'

// initialState
const initialState = {
  posts: [],
  loading: false,
  error: '',
}

//actions
const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await axios.get(apiURL)
  return res.data
})

//slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload //action.payload is to get data from the api we are fetcing 'fetchPosts'
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.payload
    })
  },
})

// Generate ReducerType
const postsReducer = postsSlice.reducer

export default postsReducer
