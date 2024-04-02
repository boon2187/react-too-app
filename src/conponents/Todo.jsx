import React from 'react'

const Todo = ({todo,deleteTodo}) => {
  // ボタンが押されたらdeleteTodo関数を実行してtodosから削除
  const hundleClick = () => {
    deleteTodo(todo.id);
  }

  return (
    <li>
      {todo.task} - {todo.isFinished ? "完了" : "未完了"}
      <button>{todo.isFinished ? "未完了に" :"完了"}</button>
      <button onClick={hundleClick}>削除</button>
    </li>
  )
}

export default Todo