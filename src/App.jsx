import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'

const App = () => {
  return (
    <main className="overflow-y-hidden antialiased text-neutral-200">
      <HeroSection />
      <Navbar />
      <Dishes />
    </main>
  )
}

export default App
