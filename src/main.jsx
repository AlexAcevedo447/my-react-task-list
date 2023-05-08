import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PortalProvider from './components/context/portalContext';
import AppRouting from './AppRouting';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortalProvider children={<AppRouting></AppRouting>} />
  </React.StrictMode>,
)
