import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="nav-col-left">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
        </div>
        
        <div className="nav-col-center">
          <a href="#about" className="yc-logo-box">B</a>
        </div>
        
        <div className="nav-col-right">
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://github.com/GRIMMZOWW" target="_blank" rel="noopener noreferrer" className="btn-pill-black">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
