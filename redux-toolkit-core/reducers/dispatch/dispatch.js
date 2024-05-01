const {
  createAction,
  createReducer,
  configureStore,
} = require('@reduxjs/toolkit')

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
  reducer: counterBuilderCallbackNotationSlice,
})

//== DISPATCH ACTION ==
store.dispatch(increment()) //1
store.dispatch(increment()) //2
store.dispatch(increment()) //3
console.log(store.getState())

store.dispatch(increment_by(20)) //23
console.log(store.getState())
