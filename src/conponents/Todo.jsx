import React from 'react'

const Todo = ({id, task}) => {
  return (
    <li>{id}, {task}</li>
  )
}

export default Todo