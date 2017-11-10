import { GENERATE_PASSWORD } from '../actions'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const randomString = (n) => {
  var output = ""
  for (var i = 0; i < n; i++) {
    output += String.fromCharCode(getRandomInt(33, 126))
  }
  return output
}

const passwordsReducer = (state=[], action) => {
  //Choose which action is react-router-native
  switch (action.type) {
    case GENERATE_PASSWORD:
      var newPassword = randomString(action.payload.size)
      return [...state, newPassword]
    default:
     return state
  }
}

export default passwordsReducer
