const { createAction, createReducer } = require('@reduxjs/toolkit')

const initialState = {
  count: 0,
}

//== CREATE ACTION ==
const increment = createAction('INCREMENT')
const increment_by = createAction('INCREMENT_BY', (amount) => {
  return {
    payload: { amount },
  }
})

// == CREATE REDUCER ==
const counterMapObjectNotationSlice = createAction(initialState, {
  [increment]: (state) => {
    state.count += 1
  },
  [increment_by]: (state, action) => {
    state.count += action.payload.amount
  },
})

const counterBuilderCallbackNotationSlice = createReducer(
  initialState,
  (builder) => {
    builder.addCase(increment, (state) => {
      state.count += 1
    })

    builder.addCase(increment_by, (state, action) => {
      state.count += action.payload.amount
    })
  }
)

//== CREATE STORE ==
const store = configureStore({
  reducer: counterMapObjectNotationSlice,
  counterBuilderCallbackNotationSlice,
})
