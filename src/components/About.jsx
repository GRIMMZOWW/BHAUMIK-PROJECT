import React from 'react';

const About = () => {
  return (
    <section id="about" className="hero">
      <div className="section-title">01 / Profile</div>
      <h1>
        Bhaumik Shivmath <br />
        <i>is building the web.</i>
      </h1>
      <p>
        I'm a B.Tech student currently diving deep into the world of Full Stack Development. 
        I enjoy turning complex problems into simple, beautiful, and intuitive designs.
      </p>
      <div style={{ marginTop: '40px' }}>
        <a href="#projects" style={{ fontWeight: '700', borderBottom: '2px solid var(--accent)', paddingBottom: '5px' }}>
          Explore my journey &rarr;
        </a>
      </div>
    </section>
  );
};

export default About;
