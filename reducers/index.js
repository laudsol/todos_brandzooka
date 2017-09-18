import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const auth = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':

      return action.auth;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
