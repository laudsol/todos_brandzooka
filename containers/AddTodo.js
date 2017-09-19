import React from 'react'
import Login from '../components/FbLoginBtn'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../components/App.css';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='addToDoBox'>
      <div className='titleBox'>
        Do it!
      </div>
      <div className='loginBox'>
      <Login />
      </div>
      <form
        className='formBox'
        onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input
          className='inputBox'
          ref={node => {
          input = node
        }} />
        <button
          className='submitBtn'
          type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
