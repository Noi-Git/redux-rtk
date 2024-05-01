const { createSlice, configureStore } = require('@reduxjs/toolkit')

//initial state
const initialState = {
  counter: 0,
}

//createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
    incrementByAmount: (state, action) => {
      // state.counter += action.payload.amount <-- never add anything else after payload
      state.counter += action.payload
    },
  },
})

//Generate actions
const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

//Generate reducer
const counterReducer = counterSlice.reducer

//create store
const store = configureStore({
  reducer: counterReducer,
})

//dispatch
store.dispatch(increment())
store.dispatch(incrementByAmount(200))

console.log(store.getState())
