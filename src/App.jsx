import { useState } from 'react';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TaskModel } from './models/taskModel';

import './App.css';



function App() {
  return (
    <div className="App">
      <div className="task-popup">
        <Header />
        <TaskList />
      </div>
    </div>
  )
}

export default App
