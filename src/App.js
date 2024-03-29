import React from 'react';
import About from './components/About';
import './index.css'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
      <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;