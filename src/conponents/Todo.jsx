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
      <input type='checkbox' checked={todo.isFinished} onChange={hundleToggle}/>
      <span className={todo.isFinished ? classes.finished : ""}>{todo.task}</span>
      <button onClick={hundleClick}>削除</button>
    </li>
  )
}

export default Todo