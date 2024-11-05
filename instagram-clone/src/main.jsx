import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
// import { LoginWrapper } from './components/loginWrapper/Loginwrapper.jsx'

import './index.css'
import { LoginWrapper } from './components/LoginWrapper';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LoginWrapper isLoggeding={true} /> */}
    <ChakraProvider>
    <LoginWrapper />
    </ChakraProvider>

  </React.StrictMode>
)
