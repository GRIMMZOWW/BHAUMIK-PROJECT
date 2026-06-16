import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-label">resume</div>
      <div className="yc-card">
        <h2>Education & Academic History</h2>
        
        <div className="contact-table" style={{ marginBottom: '30px' }}>
          <div className="contact-row-item" style={{ gridTemplateColumns: '150px 1fr' }}>
            <span className="contact-lbl">B.Tech (CSE)</span>
            <span className="contact-val">Currently Pursuing &mdash; 2nd Year</span>
          </div>
          <div className="contact-row-item" style={{ gridTemplateColumns: '150px 1fr' }}>
            <span className="contact-lbl">Mechatronics</span>
            <span className="contact-val">Govt. Tool Room & Training Center (2021&ndash;2025) &bull; 72%</span>
          </div>
          <div className="contact-row-item" style={{ gridTemplateColumns: '150px 1fr' }}>
            <span className="contact-lbl">Class X (SSC)</span>
            <span className="contact-val">Blessed Alphonsa School &bull; 70%</span>
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
