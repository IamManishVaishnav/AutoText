import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AIAgent from './components/AIAgent'
import IntegrationPlatform from './components/IntegrationPlatform'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <AIAgent />
      <IntegrationPlatform />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
