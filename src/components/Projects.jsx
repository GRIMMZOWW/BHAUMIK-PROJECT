import React from 'react';

const projectList = [
  {
    id: "01",
    title: "Weather Dashboard",
    tech: "React / OpenWeather API",
    desc: "A functional weather application that fetches and displays real-time data for cities globally. Focused on state management and API integration."
  },
  {
    id: "02",
    title: "Smart Task Manager",
    tech: "JavaScript / Local Storage",
    desc: "A CRUD-based task manager allowing users to create, delete, and persist data using the browser's local storage."
  },
  {
    id: "03",
    title: "Python Data Script",
    tech: "Python / Pandas",
    desc: "A basic script for processing and cleaning CSV data sets for academic analysis."
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title">02 / Work & Projects</div>
      <div className="project-list">
        {projectList.map((p) => (
          <div key={p.id} className="project-item" style={{ gridTemplateColumns: '1fr', padding: '30px 0', borderBottom: '1px solid var(--border)' }}>
            <div className="project-info">
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '700' }}>{p.id}</span>
              <h3 style={{ fontSize: '2.5rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '15px' }}>{p.tech}</p>
              <p style={{ color: '#555', maxWidth: '600px' }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
