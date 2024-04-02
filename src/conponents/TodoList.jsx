import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <ul>
        {todos.map((todo) => <Todo key={todo.id} id={todo.id} task={todo.task} deleteTodo={deleteTodo}/>)}
    </ul>
  )
}

export default TodoList