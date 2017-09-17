import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li>
    <div
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </div>
    <button class='deleteItem'>
      delete
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
