import './App.css';

import { useState } from 'react';

import Header from './conponents/Header';
import Input from './conponents/Input';
import TodoList from './conponents/TodoList';

function App() {
  // Todoを保持するstateを作成
  const [todos, setTodos] = useState();


  return (
    <div >
      <Header />
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
