import React from 'react';

const projectList = [
  {
    id: "1",
    title: "Weather Dashboard",
    tech: "React / OpenWeather API",
    desc: "A functional weather application that fetches and displays real-time weather data for cities globally. It features clean state management, responsive layouts, and smooth asynchronous API integrations.",
    link: "https://github.com/GRIMMZOWW/BHAUMIK-PROJECT"
  },
  {
    id: "2",
    title: "Smart Task Manager",
    tech: "JavaScript / Local Storage",
    desc: "A client-side CRUD task application. Users can add, filter, complete, and delete tasks with state persistent storage through local storage web APIs.",
    link: "https://github.com/GRIMMZOWW/BHAUMIK-PROJECT"
  },
  {
    id: "3",
    title: "Python Data Script",
    tech: "Python / Pandas",
    desc: "An automated data processing script developed using Python and Pandas. Used for cleaning, structuring, and preparing raw academic datasets for computational research.",
    link: "https://github.com/GRIMMZOWW/BHAUMIK-PROJECT"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-label">projects</div>
      <div className="projects-grid">
        {projectList.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-card-header">
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card-title">
                {p.title}
              </a>
              <span className="project-card-tech">{p.tech}</span>
            </div>
            <p className="project-card-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
