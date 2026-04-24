import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <div className="section-title">05 / Contact</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '4.5rem', fontWeight: '400', lineHeight: 1 }}>
        Let's connect.
      </h2>
      
      <div style={{ marginTop: '40px' }}>
        <a href="mailto:bhaumik3553@gmail.com" style={{ color: 'var(--accent)', fontSize: '1.8rem', fontWeight: '700', textDecoration: 'none' }}>
          bhaumik3553@gmail.com
        </a>
        <div style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: '500' }}>
          +91 70198 39381
        </div>
        <div style={{ marginTop: '10px', color: '#666' }}>
          Mumbai, Sion
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <a href="https://github.com/GRIMMZOWW" target="_blank" rel="noreferrer" className="btn-main">
          GitHub Profile
        </a>
      </div>

      <div style={{ marginTop: '60px', fontSize: '0.8rem', opacity: 0.4, textTransform: 'uppercase' }}>
        Currently seeking opportunities for growth.
      </div>
    </section>
  );
};

export default Contact;
