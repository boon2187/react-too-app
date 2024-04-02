import './App.css';

import { useState } from 'react';

import Header from './conponents/Header';
import Input from './conponents/Input';
import TodoList from './conponents/TodoList';

function App() {
  // Todoを保持するstateを作成
  const [todos, setTodos] = useState([{id:"1", task:"todo1", isFinished:false},{id:"2", task:"todo2", isFinished:false},{id:"3", task:"todo3", isFinished:false}]);


  return (
    <div >
      <Header />
      <Input />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
