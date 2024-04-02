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

  // Todoを削除する関数
  const deleteTodo = (id) => {
    // idが一致しないものだけを抽出して新しい配列を作成
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  // isFinishedを変更する関数
  const toggleIsFinished = (id) => {
    // idが一致する要素のisFinishedを変更
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.isFinished = !todo.isFinished;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <div >
      <Header />
      <Input addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleIsFinished={toggleIsFinished}/>
    </div>
  );
}

export default App;
