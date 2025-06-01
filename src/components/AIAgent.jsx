import React from 'react'

const aiAgents = [
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>, title: 'Sales Agents', desc: 'AI-powered systems that engage with potential customers.' },
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8"/></svg>, title: 'Operation Agents', desc: 'Intelligent systems that autonomously manage, optimize.' },
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg>, title: 'Marketing Agents', desc: 'AI-driven tools that strategize, execute, and optimize promotional efforts.' },
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 9h6v6H9z"/></svg>, title: 'Support Agents', desc: 'Virtual assistants that provide real-time customer service, troubleshooting.' },
]
const mlFeatures = [
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>, title: 'Customer Segmentation', desc: 'ML models group customers into defined segments based on characteristics.' },
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8"/></svg>, title: 'Predictive Lead Scoring', desc: 'ML models analyze historical customer data and behavioral patterns.' },
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 16l4-8 4 8"/></svg>, title: 'Conversation AI', desc: 'Virtual assistants that provide real-time customer service.' },
  { icon: <svg width="24" height="24" fill="none" stroke="#2A89FB" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 16h8"/></svg>, title: 'Performance Prediction', desc: 'ML models analyze historical campaign data and forecast outcomes.' },
]

const AIAgent = () => (
  <section className="ai-ml-section">
    <h2 className="section-title">Smarter Marketing, Powered by AI / ML</h2>
    <p className="section-desc">AutoText's intelligent engine learns from your content and audience to continuously improve results</p>
    <div className="ai-ml-grid">
      <div className="ai-ml-card">
        <h3>AI Agents</h3>
        <ul>
          {aiAgents.map((item, idx) => (
            <li key={idx}><span className="ai-ml-icon">{item.icon}</span><span className="ai-ml-list-title">{item.title}</span><span className="ai-ml-list-desc">{item.desc}</span></li>
          ))}
        </ul>
      </div>
      <div className="ai-ml-card">
        <h3>Machine Learning</h3>
        <ul>
          {mlFeatures.map((item, idx) => (
            <li key={idx}><span className="ai-ml-icon">{item.icon}</span><span className="ai-ml-list-title">{item.title}</span><span className="ai-ml-list-desc">{item.desc}</span></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default AIAgent 