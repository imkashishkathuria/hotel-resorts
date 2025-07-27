import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room' element={<Room />} />
    </Routes>
  )
}

export default App
