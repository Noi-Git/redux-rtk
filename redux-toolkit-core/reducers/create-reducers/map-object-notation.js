const { createAction } = require('@reduxjs/toolkit')

const initialState = {
  count: 0,
}
//== CREATE ACTION ==
const increment = createAction('INCREMENT')
const decrement = createAction('DEREMENT')
const reset = createAction('RESET')
const increment_by = createAction('INCREMENT_BY', (amount) => {
  return {
    payload: { amount },
  }
})

// == CREATE REDUCER == using map object notation
createAction(initialState, {
  [increment]: (state) => {
    state.count += 1
  },
  [decrement]: (state) => {
    state.count -= 1
  },
  [reset]: (state) => {
    state.count = 0
  },
  [increment_by]: (state, action) => {
    state.count += action.payload.amount
  },
})
