import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import ToDoList from './ToDoList';

const App = () => (
  <div>
    <h1>To Do List</h1>
    <Form />
    <ToDoList />
  </div>
);

export default connect(null, null)(App);
