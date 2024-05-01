const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require('@reduxjs/toolkit')
const axios = require('axios')

const API = 'https://jsonplaceholder.typicode.com/posts'

// initial state
const initialState = {
  post: [], //fulfill
  loading: false, //pending
  error: null, //rejected
}

// create async thunk -- action creator
const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  //'posts' = the type of http request you are performaing
  const res = await axios.get(API)
  return res.data
})

// create slice - handle application lifecycle
const postSlice = createSlice({
  name: 'posts',
  initialState,
  //use extraReducer when makine async actions - basically when use async-thunk
  extraReducers: (builder) => {
    //Handing lifecycle - pending, success, rejected
    //pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true //
    })
    //fulfill
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      //we want to change 'posts'
      // - the actual value is provided inside payload
      state.posts = action.payload
      state.loading = false
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [] //empty the state
      state.loading = false
      state.error = action.payload
    })
  },
})

//generate reducer
const postsReducer = postSlice.reducer

//store
const store = configureStore({
  reducer: postsReducer,
})

//dispatch
//listening to the event change
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(fetchPosts())
