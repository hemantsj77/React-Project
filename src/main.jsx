import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainRoutes from './Routes/MainRoutes'
import login from './Screen/login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRoutes />
    <login />
  </React.StrictMode>
)