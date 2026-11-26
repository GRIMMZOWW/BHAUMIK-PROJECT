import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-label">contact</div>
      <div className="yc-card">
        <h2>Let's connect</h2>
        <p>
          Currently working as a MERN Stack Intern at ZA Charity Feed Foundation and open to full-time junior developer roles or collaborative projects. Feel free to reach out directly through any of the channels below.
        </p>
        
        <div className="contact-table" style={{ marginBottom: 0 }}>
          <div className="contact-row-item">
            <span className="contact-lbl">Email</span>
            <span className="contact-val">
              <a href="mailto:bhaumik3553@gmail.com">bhaumik3553@gmail.com</a>
            </span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">Phone</span>
            <span className="contact-val">+91 9867965708</span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">Location</span>
            <span className="contact-val">Sion, Mumbai</span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">Github</span>
            <span className="contact-val">
              <a href="https://github.com/GRIMMZOWW" target="_blank" rel="noopener noreferrer">
                github.com/GRIMMZOWW
              </a>
            </span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">LinkedIn</span>
            <span className="contact-val">
              <a href="https://www.linkedin.com/in/bhaumik-shivmath-246b69402/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/bhaumik-shivmath-246b69402
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
