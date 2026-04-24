import React from 'react';

const myTech = [
  { cat: "Languages", items: "JavaScript, Python, HTML5, CSS3" },
  { cat: "Frameworks", items: "React.js" },
  { cat: "Version Control", items: "Git & GitHub" }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-title">03 / Tools</div>
      <div className="skills-grid">
        {myTech.map((t, i) => (
          <div key={i} className="skill-box">
            <span>{t.cat}</span>
            {t.items}
          </div>
        ))}
      </div>
      <p style={{ marginTop: '30px', color: '#888', fontSize: '0.9rem' }}>
        Currently learning Full Stack Development to expand my engineering capabilities.
      </p>
    </section>
  );
};

export default Skills;
