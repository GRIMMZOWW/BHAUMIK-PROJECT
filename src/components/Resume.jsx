import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-label">resume</div>
      <div className="yc-card">
        <h2>Current Education</h2>
        
        <div className="contact-table" style={{ marginBottom: '30px' }}>
          <div className="contact-row-item" style={{ gridTemplateColumns: '150px 1fr' }}>
            <span className="contact-lbl">ITVedant</span>
            <span className="contact-val">Currently pursuing Fullstack Development in Java</span>
          </div>
        </div>

        <a href="/resume.pdf" download className="btn-pill-orange">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;
