import React from 'react';

const myTech = [
  { cat: "Backend & API", items: "Java 21, Spring Boot, Spring Security, JWT, REST APIs, MySQL, Redis" },
  { cat: "Frontend Framework", items: "React.js" },
  { cat: "Web Technologies", items: "HTML, CSS, Bootstrap, JavaScript" },
  { cat: "AI Tools", items: "Antigravity, Cursor, Codex, Claude Code" },
  { cat: "Cloud, Version Control & Hosting", items: "AWS (Basics), Git, GitHub, Vercel, Docker" },
  { cat: "Programming Basics", items: "Python, SQL" },
  { cat: "Currently Learning", items: "MERN Stack (MongoDB, Express.js, Node.js), Angular" }
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
        // Actively upskilling through certified training and real-world projects.
      </p>
    </section>
  );
};

export default Skills;
