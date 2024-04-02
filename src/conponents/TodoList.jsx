import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, toggleIsFinished}) => {
  return (
    <ul>
        {todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleIsFinished={toggleIsFinished} />)}
    </ul>
  )
}

export default TodoList