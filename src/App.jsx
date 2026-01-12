import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white '>
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App