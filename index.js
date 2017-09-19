import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp, {
  todos: [
    { id: 0, text: 'foo', completed: false },
    { id: 1, text: 'bar', completed: false },
    { id: 2, text: 'asdfasdf', completed: true },
    { id: 3, text: 'asldkfjasdf', completed: true },
    { id: 4, text: 'sdfsdf', completed: false },
  ]
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// redux thunk middleware, axios
