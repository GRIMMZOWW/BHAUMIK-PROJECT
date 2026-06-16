import React from 'react';

const myTech = [
  { cat: "Web Technologies", items: "HTML, CSS, Bootstrap, JavaScript" },
  { cat: "Frontend Framework", items: "React.js" },
  { cat: "Database Systems", items: "MySQL (Joins, Subqueries, Views, Indexes, Stored Procedures, Triggers, Transactions)" },
  { cat: "Version Control & Hosting", items: "Git, GitHub, Vercel" },
  { cat: "Programming Basics", items: "Python" },
  { cat: "Currently Learning", items: "Java, Spring Boot, Full Stack Web Development, Next.js, TypeScript" }
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
