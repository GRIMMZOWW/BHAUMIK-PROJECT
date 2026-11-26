import React from 'react';

const projectList = [
  {
    id: "1",
    title: "ExTask — Campus Coding Task Marketplace",
    tech: "React, Java, Spring Boot, Spring Security, MySQL",
    desc: "Built a full-stack platform where students post coding tasks and get paid for solving them with escrow-style payments. Implemented a guarded task state machine (Open → Accepted → Submitted → Approved → Paid), Spring Security with role-based access, BCrypt password hashing, OTP-based password reset, and a React frontend featuring a command palette (Ctrl+K) and an admin panel for tracking users, tasks, and payments.",
    link: "https://github.com/GRIMMZOWW/ExTask",
    github: "https://github.com/GRIMMZOWW/ExTask"
  },
  {
    id: "2",
    title: "GrabASeat — Movie Ticket Booking App (In Progress)",
    tech: "React, Java 21, Spring Boot, MySQL, JWT, Docker",
    desc: "Building a BookMyShow-style movie ticket booking app with interactive seat selection and seat locking so two users cannot book the same seat. Includes JWT authentication with Admin and User roles, booking, mock payment, cancellation, Swagger API docs, Docker setup, and a CI pipeline.",
    link: "https://github.com/GRIMMZOWW/GrabASeat",
    github: "https://github.com/GRIMMZOWW/GrabASeat"
  },
  {
    id: "3",
    title: "SnackYatra — Regional Indian Snack Subscription E-commerce",
    tech: "React, JavaScript, CSS",
    desc: "Built and deployed a React e-commerce platform where users can subscribe to authentic regional Indian snacks. Designed an editorial-style UI inspired by premium storefronts, with region filtering, cart state management, responsive mobile layout, and smooth navigation flows.",
    link: "https://snackyatra.vercel.app",
    live: "https://snackyatra.vercel.app",
    github: "https://github.com/GRIMMZOWW/snackYatra"
  },
  {
    id: "4",
    title: "Blood Donor Matching System",
    tech: "Java, OOP",
    desc: "Built a console-based Java application to match blood donors with recipients, prioritizing matches by urgency (CRITICAL > HIGH > MEDIUM > LOW) and blood group compatibility. Applied OOP principles including an abstract Person class, Donor/Recipient subclasses, custom exceptions, and a layered service architecture with file persistence.",
    link: "https://github.com/GRIMMZOWW/BloodDonorSystem",
    github: "https://github.com/GRIMMZOWW/BloodDonorSystem"
  },
  {
    id: "5",
    title: "Personal Portfolio Website",
    tech: "React, HTML, CSS, JavaScript",
    desc: "Designed and deployed a responsive personal developer portfolio inspired by Y Combinator's minimal aesthetic to showcase full-stack and frontend projects, skills, and downloadable resume. Hosted on Vercel.",
    link: "https://bhaumik-project.vercel.app",
    live: "https://bhaumik-project.vercel.app",
    github: "https://github.com/GRIMMZOWW/BHAUMIK-PROJECT"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-label">projects</div>
      <div className="projects-grid">
        {projectList.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-card-header project-card-header-col">
              <div className="project-title-row">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card-title">
                  {p.title}
                </a>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-badge-link project-badge-live">
                      Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-badge-link">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
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
