import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'

function App() {
  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
    </div>
  )
}

export default App