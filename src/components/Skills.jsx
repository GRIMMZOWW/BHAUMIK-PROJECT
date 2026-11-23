import React from 'react';

const myTech = [
  { cat: "Backend & API", items: "Java 21, Spring Boot, Spring Security, Node.js, Express.js, REST APIs" },
  { cat: "Frontend Framework", items: "React.js" },
  { cat: "Web Technologies", items: "HTML, CSS, Bootstrap, JavaScript" },
  { cat: "Databases", items: "MySQL, MongoDB" },
  { cat: "Cloud & Hosting", items: "AWS (Basics), Vercel" },
  { cat: "Version Control", items: "Git, GitHub" },
  { cat: "Programming Basics", items: "Python, SQL" },
  { cat: "Currently Learning", items: "Angular, Full Stack Web Development" }
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
