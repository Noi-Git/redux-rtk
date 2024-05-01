const counterSlice = createReducer(initialState2, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.counter += 1
    })
    .addCase(incrementBy, (state, action) => {
      state.counter += action.payload.amount
    })
})
