import React, { PropTypes } from 'react'
import { deleteTodo } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Todo = ({ deleteTodo, onClick, completed, text, id }) => {
  console.log(deleteTodo, onClick, completed, text, id);
  return (
    <li>
      <div
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        >
          {text}
        </div>
        <button
          onClick={() => deleteTodo(id)}
        >
          delete
        </button>
      </li>
    )
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Todo);
