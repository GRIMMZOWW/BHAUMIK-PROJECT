import React from 'react';

const myTech = [
  { cat: "Backend & API", items: "Java 21, Spring Boot, Spring Security, REST APIs, MySQL" },
  { cat: "Frontend Framework", items: "React.js" },
  { cat: "Web Technologies", items: "HTML, CSS, Bootstrap, JavaScript" },
  { cat: "Version Control & Hosting", items: "Git, GitHub, Vercel" },
  { cat: "Programming Basics", items: "Python, SQL" },
  { cat: "Currently Learning", items: "Full Stack Web Development, Spring Boot" }
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
