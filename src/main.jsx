import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PortalProvider from './components/context/portalContext';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AppRouting from './AppRouting';

const colors = {
  blue: {
    0: '#050239',
    20: '#0a0568',
    40: '#090377',
    60: '#0e05b5',
    80: '#2618e7',
    100: '#7682ff'
  },
  white: {
    100: "#ffffff"
  }
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PortalProvider children={<AppRouting></AppRouting>} />
    </ChakraProvider>
  </React.StrictMode>
)
