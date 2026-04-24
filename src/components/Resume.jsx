import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-title">04 / CV</div>
      <div style={{ padding: '60px', background: '#f9f9f9', border: '1px solid #eee', borderRadius: '4px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: '400' }}>Academic & Professional</h2>
        <p style={{ margin: '20px 0 30px', color: '#555' }}>
          I am a B.Tech student with a strong foundation in core engineering principles and a passion for modern web technologies. 
          Download my CV to see my academic projects and technical journey.
        </p>
        <a href="/resume.pdf" download className="btn-main">
          Download Resume (PDF) &darr;
        </a>
      </div>
    </section>
  );
};

export default Resume;
