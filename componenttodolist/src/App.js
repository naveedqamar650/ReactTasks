import React, { useState } from 'react';
import data from "./datafile.json";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <h1>
        ToDo List
      </h1>
      <ToDoList toDoList={toDoList}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
