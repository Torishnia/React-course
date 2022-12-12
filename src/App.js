import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy milk'},
    {id: 3, completed: false, title: 'Buy oil'},
  ]

  return (
   <div className="wrapper">
      <h1>React tutorial</h1>


      <TodoList todos={todos} key={todos.id}/>
   </div>
  );
}

export default App;


