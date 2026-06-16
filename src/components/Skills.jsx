import React from 'react';

const myTech = [
  { cat: "Languages", items: "React, JavaScript, Python, Git" },
  { cat: "Core Stack", items: "HTML5, CSS3, Modern ES6+ JavaScript" },
  { cat: "Tooling", items: "Vite, npm, GitHub, Terminal Command Line" }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-label">skills</div>
      <div className="spec-sheet">
        {myTech.map((t, i) => (
          <div key={i} className="spec-row">
            <div className="spec-category">{t.cat}</div>
            <div className="spec-list">{t.items}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '40px', color: 'var(--text-yc-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
        // Currently expanding Full Stack Development capabilities.
      </p>
    </section>
  );
};

export default Skills;
