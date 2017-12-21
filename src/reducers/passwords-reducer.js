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
  switch (action.type) {
    case GENERATE_PASSWORD:
      const newPassword = randomString(action.payload.size)
      var passwordObject = {}
      if (action.payload.name) {
        // If a name was given add it to the object
        passwordObject = {password: newPassword, name: action.payload.name}
      } else {
        // Otherwise if no name generate a name to identify the password
        const newName = "Password " + state.length.toString()
        passwordObject = {password: newPassword, name: newName}
      }
      return [...state, passwordObject]
    default:
     return state
  }
}

export default passwordsReducer
