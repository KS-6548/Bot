import React from 'react'
import './App.css'
import Home from './Pages/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App