import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Login from '../Views/Screen/Login'
import SignUpScreen from '../Views/Screen/SignUpScreen'
import CardScreen from '../Views/Screen/CardScreen'
import WeatherCard from '../Views/Components/WheatherCard'

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/products" element={<CardScreen />}/>
        <Route path="/weather" element={<WeatherCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes