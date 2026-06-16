import React from 'react';

const About = () => {
  return (
    <section id="about" className="hero-center">
      <div className="hero-footnote" style={{ marginBottom: '30px', marginTop: '0' }}>
        First, bring the code to life; visual elegance and structural perfection are crafted through continuous iteration.
        <span className="footnote-author">— Bhaumik Shivmath</span>
      </div>

      <h1 className="hero-title-serif">
        Bhaumik turns ideas <br />
        into <i>formidable applications</i>
      </h1>

      <a href="#projects" className="scroll-arrow" title="Scroll to Projects">
        ▾
      </a>
    </section>
  );
};

export default About;
