import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-label">contact</div>
      <div className="yc-card">
        <h2>Let's connect</h2>
        <p>
          I am currently seeking junior developer roles or internship opportunities. Feel free to reach out directly through any of the channels below.
        </p>
        
        <div className="contact-table">
          <div className="contact-row-item">
            <span className="contact-lbl">Email</span>
            <span className="contact-val">
              <a href="mailto:bhaumik3553@gmail.com">bhaumik3553@gmail.com</a>
            </span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">Phone</span>
            <span className="contact-val">+91 70198 39381</span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">Location</span>
            <span className="contact-val">Mumbai, Sion</span>
          </div>
          <div className="contact-row-item">
            <span className="contact-lbl">Github</span>
            <span className="contact-val">
              <a href="https://github.com/GRIMMZOWW" target="_blank" rel="noopener noreferrer">
                github.com/GRIMMZOWW
              </a>
            </span>
          </div>
        </div>

        <a href="mailto:bhaumik3553@gmail.com" className="btn-pill-orange">
          Send Email Direct
        </a>
      </div>
    </section>
  );
};

export default Contact;
