

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Modal } from './components/modals';

import './App.css';



function App() {
  return (
    <div className="App">

      <div className="task-popup">
        <Header />
        <Modal />
        <TaskList />
      </div>
    </div>
  )
}

export default App
