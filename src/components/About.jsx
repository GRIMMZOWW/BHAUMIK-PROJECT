import React from 'react';

const About = () => {
  return (
    <section id="about" className="hero-center">
      <h1 className="hero-title-serif">
        Bhaumik turns ideas <br />
        into <i>formidable applications</i>
      </h1>
      
      <div className="hero-footnote">
        "First make it live, and you can make it beautiful later."
        <span className="footnote-author">— Bhaumik Shivmath</span>
      </div>

      <a href="#projects" className="scroll-arrow" title="Scroll to Projects">
        ▾
      </a>
    </section>
  );
};

export default About;
