import React, { PropTypes } from 'react'
import Todo from './Todo'
import { deleteTodo } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const TodoList = props => (
  <div
    className='listBox'
  >
    <ul>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(mapStateToProps, null)(TodoList);
