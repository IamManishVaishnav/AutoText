import React from 'react'

const platforms = [
  {
    name: 'Instagram',
    color: '#E1306C',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#E1306C" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#E1306C" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#E1306C"/></svg>
    )
  },
  {
    name: 'Facebook',
    color: '#1877F3',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#1877F3" strokeWidth="2"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 3h-2.5v6" stroke="#1877F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  },
  {
    name: 'LinkedIn',
    color: '#0A66C2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#0A66C2" strokeWidth="2"/><path d="M8 11v5" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="1" fill="#0A66C2"/><path d="M12 11v5" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"/><path d="M12 14c0-1.5 2-1.5 2 0v2" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    name: 'Twitter',
    color: '#1DA1F2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#1DA1F2" strokeWidth="2"/><path d="M8 15c6 0 9-5 9-9v-.5A6.5 6.5 0 0 0 20 4.5a6.5 6.5 0 0 1-1.88.52A3.25 3.25 0 0 0 19.5 3a6.5 6.5 0 0 1-2.06.79A3.25 3.25 0 0 0 12 6.75v.5A9.25 9.25 0 0 1 3 4.5" stroke="#1DA1F2" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  }
]

const IntegrationPlatform = () => (
  <section className="integration-platform">
    <h2 className="section-title">Connect with Your Favorite Platforms</h2>
    <div className="platform-row">
      {platforms.map((platform, idx) => (
        <div className="platform-pill" key={platform.name} style={{borderColor: platform.color}}>
          <span className="platform-icon">{platform.icon}</span>
          <span className="platform-name" style={{color: platform.color}}>{platform.name}</span>
        </div>
      ))}
    </div>
  </section>
)

export default IntegrationPlatform 