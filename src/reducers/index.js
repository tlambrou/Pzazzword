import { combineReducers } from 'redux'
import passwordsReducer from './passwords-reducer'

export default combineReducers({
  passwords: passwordsReducer
})
