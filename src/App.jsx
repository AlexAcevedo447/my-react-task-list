import { Outlet } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader'

function App() {

  return (
    <main className='main-page'>
      <AppHeader />
      <Outlet />
    </main>
  )
}

export default App
