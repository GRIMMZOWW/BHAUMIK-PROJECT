import React from 'react';

const About = () => {
  return (
    <section id="about" className="hero-center">
      <h1 className="hero-title-serif">
        Bhaumik turns ideas <br />
        into <i>formidable applications</i>
      </h1>

      <div className="hero-footnote" style={{ marginTop: '36px' }}>
        First, bring the code to life; visual elegance and structural perfection are crafted through continuous iteration.
        <span className="footnote-author">— Bhaumik Shivmath</span>
      </div>

      <div className="hero-cta">
        <a
          href="https://github.com/GRIMMZOWW"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill-black hero-github-btn"
        >
          GitHub
        </a>
      </div>

      <a href="#experience" className="scroll-arrow hero-scroll-arrow" title="Scroll to Experience">
        ▾
      </a>
    </section>
  );
};

export default About;
