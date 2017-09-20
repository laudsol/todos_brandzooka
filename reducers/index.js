import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import setFacebookUser from './fbdata'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  setFacebookUser
})



export default todoApp
