import React from 'react'

const Todo = ({todo,deleteTodo}) => {
  return (
    <li>
      {todo.task}
      <button>削除</button>
    </li>
  )
}

export default Todo