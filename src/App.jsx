import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import SocialLinks from './components/SocialLinks'
import CoolLinks from './components/CoolLinks'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Animação fade-in para os elementos
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // Efeito hover para os cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Cleanup
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', function() {});
        card.removeEventListener('mouseleave', function() {});
      });
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
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
  )
}

export default App
