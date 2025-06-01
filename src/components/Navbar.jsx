import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-text">
          <img src={logo} alt="AutoText Logo" />
          
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faqs">FAQs</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="navbar-login">
          <button className="navbar-login-btn">
            Login
            <span className="login-icon" style={{marginLeft: '0.5rem', display: 'inline-flex', verticalAlign: 'middle'}}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="6" r="4" stroke="white" strokeWidth="1.5"/>
                <path d="M3 17C3 14.2386 6.13401 12 10 12C13.866 12 17 14.2386 17 17" stroke="white" strokeWidth="1.5"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 