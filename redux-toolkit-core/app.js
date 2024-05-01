//InitialsState
const { createAction, nanoid, createReducer } = require('@reduxjs/toolkit')
const initialState = {
  count: 0,
}

//Create acriotn
const increment = createAction('INCREMENT')
const decrement = createAction('DEREMENT')
const resetCounter = createAction('RESET')
// const incrementBy = createAction('INCREMENT_BY')

//pass additional data
const incrementBy = createAction('INCREMENT_BY', (amount, user) => {
  return {
    payload: {
      amount,
      user,
      id: nanoid(), //random number
    },
  }
})
console.log(incrementBy(20, 'Emma'))

//create Reducer

//Store
