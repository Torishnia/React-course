import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
    return (
        <ul>
           {props.todos.map(todo => {
              return <TodoItem todo={todo} key={todo.id}/>
           })}
        </ul>
    )
}