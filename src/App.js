import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import ProjectPage from './pages/projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/projects' element={<ProjectPage/>} exact />
        <Route path='/stack' element={<Home/>} exact />
        <Route path='/contact' element={<Home/>} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
