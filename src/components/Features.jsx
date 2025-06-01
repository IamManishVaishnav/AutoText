import React from 'react'

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2A89FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 4v16M4 12h16"/></svg>
    ),
    title: 'Create with AI',
    description: 'Generates high-quality text and images tailored to your brand.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2A89FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/></svg>
    ),
    title: 'Smart Scheduling',
    description: 'Plan and auto-publish posts across all major social platforms.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2A89FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="4"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
    ),
    title: 'All-in-One Management',
    description: 'Connect and control all your social accounts from one dashboard.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2A89FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 3v18h18"/><circle cx="9" cy="9" r="4"/><path d="M17 17l-3-3"/></svg>
    ),
    title: 'Performance Analytics',
    description: 'Track post metrics and get insights to improve future content.'
  }
]

const Features = () => (
  <section className="features">
    <h2 className="section-title">Smart Tools, Seamless Workflow</h2>
    <p className="section-desc">From content creation to analytics – AutoText AI handles it all</p>
    <div className="features-grid">
      {features.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    <div className="features-explore">
      <button className="cta-button primary">Explore All Services <span style={{marginLeft:'0.5em',display:'inline-flex',verticalAlign:'middle'}}><svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></button>
    </div>
  </section>
)

export default Features 