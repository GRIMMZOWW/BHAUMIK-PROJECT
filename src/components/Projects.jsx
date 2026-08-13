import React from 'react';

const projectList = [
  {
    id: "1",
    title: "FixIt — Mobile Repair Service Website",
    tech: "HTML, CSS, Bootstrap, JavaScript",
    desc: "Built a fully responsive, multi-page website from scratch with five pages. Used Bootstrap for mobile, tablet, and desktop compatibility. Focused on user-friendly design so customers can quickly find services and contact details.",
    link: "https://github.com/GRIMMZOWW"
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    tech: "HTML, CSS, JavaScript, React",
    desc: "Designed and deployed a personal portfolio to showcase projects and learning journey. Features a Weather Dashboard fetching live global city data via OpenWeather API, and a Smart Task Manager using Local Storage.",
    link: "https://bhaumik-project.vercel.app"
  },
  {
    id: "3",
    title: "Blood Donor Matching System",
    tech: "Java, OOP",
    desc: "Built a console-based Java app to manage blood donors and recipients. Matched recipients to compatible donors by blood group, most urgent case first (CRITICAL > HIGH > MEDIUM > LOW). Applied OOP concepts including abstract classes, subclasses, and custom exceptions. Used a service layer and persisted donor data to a text file.",
    link: "https://github.com/GRIMMZOWW/BloodDonorSystem"
  },
  {
    id: "4",
    title: "Event Registration API",
    tech: "Java 17, Spring Boot, MySQL, Maven",
    desc: "Built a CRUD REST API to add, view, update, and cancel event registrations. Implemented clean layered architecture: Controller → Service → Repository pattern. Designed REST endpoints (GET, POST, PUT, DELETE) tested via Postman. Used MySQL for persistent storage and structured error handling.",
    link: "https://github.com/GRIMMZOWW/EventRegistrationAPI"
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
