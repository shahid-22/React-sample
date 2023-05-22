import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import "./App.css"


function App() {
  return (
    <div>
      <Router>
         <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
         </Routes>
      </Router>
      
    </div>
  )
}

export default App
