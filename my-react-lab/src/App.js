import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App