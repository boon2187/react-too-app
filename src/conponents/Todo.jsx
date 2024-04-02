import React from 'react'
import classes from './Todo.module.css'

const Todo = ({todo,deleteTodo, toggleIsFinished}) => {
  // ボタンが押されたらdeleteTodo関数を実行してtodosから削除
  const hundleClick = () => {
    deleteTodo(todo.id);
  }

const hundleToggle = () => {
  toggleIsFinished(todo.id);
}


  return (
    <li>
      <span className={todo.isFinished ? classes.finished : ""}>{todo.task}</span>
      <button onClick={hundleToggle}>{todo.isFinished ? "未完了に" :"完了"}</button>
      <button onClick={hundleClick}>削除</button>
    </li>
  )
}

export default Todo