import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <ul>
        {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </ul>
  )
}

export default TodoList