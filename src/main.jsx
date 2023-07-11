import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextGlobalProvider from './context/ContextGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <App />
    </ContextGlobalProvider>
  </React.StrictMode>
)
