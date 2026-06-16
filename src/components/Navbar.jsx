import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="nav-container">
        {/* LEFT: nav links (desktop only) */}
        <div className="nav-col-left">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
        </div>

        {/* CENTER: B logo */}
        <div className="nav-col-center">
          <a href="#about" className="yc-logo-box">B</a>
        </div>

        {/* RIGHT: links + github pill (desktop only) */}
        <div className="nav-col-right">
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href="https://github.com/GRIMMZOWW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-black"
          >
            GitHub
          </a>
        </div>

        {/* HAMBURGER: mobile only */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
          <a href="#projects" className="mobile-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="mobile-link" onClick={closeMenu}>Skills</a>
          <a href="#resume" className="mobile-link" onClick={closeMenu}>Resume</a>
          <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
          <a
            href="https://github.com/GRIMMZOWW"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link mobile-link-github"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
