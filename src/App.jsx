import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'

const App = () => {
  return (
    <main className="overflow-y-hidden antialiased text-neutral-200">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
    </main>
  )
}

export default App
