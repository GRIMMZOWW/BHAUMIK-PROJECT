import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-label">resume</div>
      <div className="yc-card">
        <h2>Academic & Professional CV</h2>
        <p>
          I am a B.Tech student with a strong foundation in core engineering principles and a passion for modern web technologies. 
          Download my resume to see my academic projects, coursework, and developer training.
        </p>
        <a href="/resume.pdf" download className="btn-pill-orange">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;
