import React from 'react'
import { useState } from 'react';

const Input = ({addTodo}) => {
  // inputのvalueを保持するstateを作成
  const [inputValue, setInputValue] = useState("");
  
  // ボタンが押されたらinputのvalueを引数にしてaddTodo関数を実行してtodosに追加
  const hundleClick = () => {
    // inputValueが空の場合は何もしない
    if(!inputValue) return;
    
    addTodo(inputValue);
    // inputのinputValueを空にして、input内が空になるように
    setInputValue("");
  }

  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={hundleClick}>Todoを追加</button>
    </div>
  )
}

export default Input