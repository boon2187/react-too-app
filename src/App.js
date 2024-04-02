import './App.css';

import { useState } from 'react';

import Header from './conponents/Header';
import Input from './conponents/Input';
import TodoList from './conponents/TodoList';

function App() {
  // Todoを保持するstateを作成
  const [todos, setTodos] = useState(["todo1","todo2","todo3"]);


  return (
    <div >
      <Header />
      <Input />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
