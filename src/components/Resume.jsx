import React from 'react';

const certifications = [
  { title: "Java Essentials", date: "July 2026" },
  { title: "React.js Development", date: "May 2026" },
  { title: "Web Development Essentials", date: "April 2026" },
  { title: "JavaScript Programming", date: "March 2026" }
];

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-label">resume</div>
      <div className="yc-card">
        <h2>Training &amp; Education</h2>

        <div className="contact-table" style={{ marginBottom: '30px' }}>
          <div className="contact-row-item resume-row-item">
            <span className="contact-lbl">
              <a
                href="https://itvedant.com/?ref=googleitvedantdadar"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Itvedant Education Pvt Ltd - Dadar
              </a>
            </span>
            <span className="contact-val">
              Completed 6-month regular Full Stack Java training &bull; Currently attending weekend sessions
            </span>
          </div>
        </div>

        <h3 className="resume-subheading">Certifications</h3>
        <div className="contact-table" style={{ marginBottom: '30px' }}>
          {certifications.map((cert) => (
            <div key={cert.title} className="contact-row-item resume-row-item">
              <span className="contact-lbl">{cert.date}</span>
              <span className="contact-val">{cert.title} &mdash; ITVedant Education Pvt. Ltd.</span>
            </div>
          ))}
        </div>

        <a href="/BHAUMIK-V3.pdf" download="Bhaumik_Shivmath_Resume.pdf" className="btn-pill-orange">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;
