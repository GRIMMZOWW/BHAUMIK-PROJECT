import React from 'react';

const About = () => {
  return (
    <section id="about" className="hero-center">
      <h1 className="hero-title-serif">
        Bhaumik turns ideas <br />
        into <i>formidable applications</i><sup>[1]</sup>
      </h1>
      
      <div className="hero-footnote">
        [1] "A formidable application is one that is fast, responsive, and robust, regardless of whatever engineering obstacles are in the way."
        <span className="footnote-author">— Bhaumik Shivmath</span>
      </div>

      <a href="#projects" className="scroll-arrow" title="Scroll to Projects">
        ▾
      </a>
    </section>
  );
};

export default About;
