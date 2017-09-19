import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoList from './TodoList';
import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App
