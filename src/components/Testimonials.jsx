import React from 'react'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'

const testimonials = [
  {
    name: 'Priya S',
    role: 'Content Specialist',
    text: 'AutoText AI cut our content time by 90%. It is like having a full-time social media team in one tool!',
    avatar: avatar1,
    stars: 5
  },
  {
    name: 'Mark D.',
    role: 'Digital Operations',
    text: 'The AI-generated posts actually sound like us. It is smart, fast, and insanely helpful.',
    avatar: avatar2,
    stars: 5
  },
  {
    name: 'Mukul A',
    role: 'Business Owner',
    text: 'AutoText AI cut our content time by 90%. It is like having a full-time social media team in one tool!',
    avatar: avatar3,
    stars: 5
  }
]

const Testimonials = () => (
  <section className="testimonials">
    <h2 className="section-title">What our customers are saying</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <div className="testimonial-avatar"><img src={t.avatar} alt={t.name} /></div>
          <div className="testimonial-text">{t.text}</div>
          <div className="testimonial-author">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-role">{t.role}</span>
          </div>
          <div className="testimonial-stars">
            {Array.from({length: t.stars}).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#2A89FB" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 14.77l-4.77 2.5.91-5.33-3.87-3.77 5.34-.78L10 2.5z"/></svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Testimonials 