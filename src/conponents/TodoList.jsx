import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <ul>
        {todos.map((todo) => <Todo key={todo.id} task={todo.task} />)}
    </ul>
  )
}

export default TodoList