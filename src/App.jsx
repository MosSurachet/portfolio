import { useState } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/portfolio'
import NumberEXP from './components/NumberEXP/NumberEXP'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <Navbar />
        {/* <Routes>
          <Route path='/about' element = {<Hero />} />
          <Route path='/skills' element = {<Skills />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes> */}
        <Hero />
        <Skills />
        <Portfolio />
        {/* <Services /> 
        <NumberEXP />
        <Testimonials /> */}
        <Contact />
        <Footer /> 
      </>
    </BrowserRouter>
  )
}

export default App
