import React from 'react'

const socials = [
  { name: 'Instagram', color: '#E1306C', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/></svg> },
  { name: 'Facebook', color: '#fff', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 3h-2.5v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'LinkedIn', color: '#fff', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><path d="M8 11v5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="1" fill="#fff"/><path d="M12 11v5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M12 14c0-1.5 2-1.5 2 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg> },
  { name: 'Twitter', color: '#fff', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><path d="M8 15c6 0 9-5 9-9v-.5A6.5 6.5 0 0 0 20 4.5a6.5 6.5 0 0 1-1.88.52A3.25 3.25 0 0 0 19.5 3a6.5 6.5 0 0 1-2.06.79A3.25 3.25 0 0 0 12 6.75v.5A9.25 9.25 0 0 1 3 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg> }
]

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3 className="footer-brand">AutoText</h3>
        <p className="footer-desc">Automate content, scheduling, and analytics with AI. Save time and grow faster.</p>
        <div className="footer-socials">
          {socials.map((s, idx) => (
            <a key={s.name} href="#" className="footer-social" style={{color: s.color}} aria-label={s.name}>{s.icon}</a>
          ))}
        </div>
      </div>
      <div className="footer-section">
        <h4>Let's Meet</h4>
        <ul>
          <li><a href="#">Demo Tour</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policies</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <form className="footer-subscribe">
        <input type="email" placeholder="Your email Address" />
        <button type="submit">Subscribe</button>
      </form>
      <p className="footer-copyright">Copyright © 2025. Designed and developed with ❤️ by Mv</p>
    </div>
  </footer>
)

export default Footer 