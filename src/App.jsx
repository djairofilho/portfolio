import React from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import Header from './components/Header'
import About from './components/About'
import SocialLinks from './components/SocialLinks'
import CoolLinks from './components/CoolLinks'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#030712' }}>
      <ParticleCanvas />
      <div className="content-layer">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <About />
            <CoolLinks />
            <SocialLinks />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
