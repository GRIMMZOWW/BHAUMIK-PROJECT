import React from 'react';

const projectList = [
  {
    id: "1",
    title: "FixIt — Mobile Repair Service Website",
    tech: "HTML, CSS, Bootstrap, JavaScript",
    desc: "Built a fully responsive, multi-page website for a mobile repair business from scratch. Designed Home, About, Services, Gallery, and Contact sections with comprehensive mobile, tablet, and desktop compatibility.",
    link: "https://github.com/GRIMMZOWW"
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    tech: "HTML, CSS, JavaScript, React",
    desc: "Designed and deployed a personal developer portfolio featuring a live Weather Dashboard (fetching global city data via OpenWeather API) and a Smart Task Manager (CRUD application using browser Local Storage).",
    link: "https://bhaumik-project.vercel.app/"
  },
  {
    id: "3",
    title: "StreamFlix — Movie Streaming Database System",
    tech: "MySQL / Relational Database Design",
    desc: "Designed and implemented a fully normalized relational database for a movie streaming service, modeling users, subscriptions, catalogs, and payments. Applied stored procedures, triggers, views, indexes, and multi-table joins.",
    link: "https://github.com/GRIMMZOWW"
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
