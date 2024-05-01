const { createAction, nanoid, createReducer } = require('@reduxjs/toolkit')

const initialState = {
  count: 0,
}

//== CREATE ACTION ==
const increment = createAction('INCREMENT')
const decrement = createAction('DEREMENT')
const reset = createAction('RESET')
const increment_by = createAction('INCREMENT_BY')
// console.log(incrementBy(20, 'Emma'))

// == CREATE REDUCER ==
//Builder callback notation
createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.count += 1
  })
  builder.addCase(decrement, (state) => {
    state.count -= 1
  })
  builder.addCase(reset, (state) => {
    state.count = 0
  })
  builder.addCase(increment_by, (state, action) => {
    state.count += action.payload.amount
  })
})
