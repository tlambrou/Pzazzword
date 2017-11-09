import { GENERATE_PASSWORD } from '../actions'

const passwordReducer = (state=[], action) => {
  // Declare a shallow copy of the state
  const newState = [...state]
  //Choose which action is react-router-native
  switch (action.type) {
    case GENERATE_PASSWORD:
      // TODO: Generate password logic here
      return newState
    default:
     return state

  }
}

export default passwordReducer
