import React from 'react'

const Todo = ({id,task,deleteTodo}) => {
  return (
    <li>
      {task}
      <button>削除</button>
    </li>
  )
}

export default Todo