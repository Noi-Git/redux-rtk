const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        count: state.count - 1,
      }
    case RESET:
      return {
        count: 0,
      }
    case INCREMENT_BY_AMT:
      return {
        count: state.count + action.payload,
      }
      defalut: return state
  }
}
