import React, { PropTypes } from 'react'
import { deleteTodo, toggleTodo } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';


const Todo = ({toggleTodo, deleteTodo, onClick, completed, text, id }) => {
  return (
    <li>
      <div
        className='listItem'
        style={{
          backgroundColor: completed ? '#ee5e8f': '#e6e7e8',
          color: completed ? 'white': 'black',
        }}
          onClick={() => toggleTodo(id)}
        >
        <div
          className='itemText'
          >
            {text}
        </div>
      </div>
      {/* Button to delete item */}
      <button
        onClick={() => deleteTodo(id)}
        className='deletebtn'
        >
          delete
        </button>
    </li>
    )
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodo, toggleTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Todo);
