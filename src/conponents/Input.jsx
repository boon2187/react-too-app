import React from 'react'

const Input = ({addTodo}) => {
  return (
    <div>
        <input type="text" />
        <button onClick={addTodo}>Todoを追加</button>
    </div>
  )
}

export default Input