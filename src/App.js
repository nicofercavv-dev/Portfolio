import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import ContactPage from './pages/contacts'
import Home from './pages/home'
import ProjectPage from './pages/projects'
import Stack from './pages/stack'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/projects' element={<ProjectPage/>} exact />
        <Route path='/stack' element={<Stack/>} exact />
        <Route path='/contact' element={<ContactPage/>} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
