import './App.css';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './conponents/Header';
import Input from './conponents/Input';
import TodoList from './conponents/TodoList';

function App() {
  // Todoを保持するstateを作成
  const [todos, setTodos] = useState([]);

  // Todoを追加する関数
  const addTodo = (addingtask) => {
    // 受け取ったaddingtaskを下に新しい
    const newTodo = {
      id: uuidv4(), // 一意のIDを生成
      task: addingtask,
      isFinished: false
    }

    // newTodoをtodosに追加
    setTodos([...todos, newTodo]);
  }

  return (
    <div >
      <Header />
      <Input addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
