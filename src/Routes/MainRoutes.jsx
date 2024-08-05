import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Login from '../Views/Screen/Login'
import SignUpScreen from '../Views/Screen/SignUpScreen'

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes