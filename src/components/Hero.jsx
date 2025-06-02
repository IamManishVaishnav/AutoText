import React from 'react'
import dashboardImg from '../assets/dashboard.png'

const ArrowIcon = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.6em' }}>
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
)

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner column-center">
        <div className="hero-text">
          <h1 className="hero-heading">
            <span>Automate Your</span><br />
            <span>Social Media Marketing</span><br />
            <span className="hero-highlight">with AutoText</span>
          </h1>
          <p className="hero-subheading">
            AI-generated content, smart scheduling, and performance analytics, automated to match your brand and boost engagement
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Get Started<ArrowIcon /></button>
            <button className="cta-button secondary">Take a Tour<ArrowIcon /></button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="glass-container">
            <img src={dashboardImg} alt="AutoText Dashboard" className="dashboard-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
