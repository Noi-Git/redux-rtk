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
export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.get(apiURL)
      return res.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.status)
    }
  }
)

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
