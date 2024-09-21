import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="overflow-y-hidden antialiased  text-neutral-200">
      <HeroSection />
      <Navbar />
    </main>
  )
}

export default App
