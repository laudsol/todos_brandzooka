import React from 'react'
import Footer from './Footer'
import FacebookLogin from './FbLogin';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoList from './TodoList';
import './App.css';

const App = () => (
  <div>
    <FacebookLogin />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
