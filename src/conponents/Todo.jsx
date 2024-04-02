import React from 'react'
import classes from './Todo.module.css'

// Todoを表示するコンポーネント
// 受け取るpropsは個別のtodoと、todoを消すdeleteTodo, isFinishedを変更するtoggleIsFinished
const Todo = ({todo,deleteTodo, toggleIsFinished}) => {
  // 削除ボタンが押されたらdeleteTodo関数を実行してtodosから削除
  const hundleClick = () => {
    deleteTodo(todo.id);
  }

  // チェックボックスが押されたらtoggleIsFinished関数を実行してisFinishedを変更
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