import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="nav-container">
        {/* LEFT: nav links (desktop only) */}
        <div className="nav-col-left">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
        </div>

        {/* CENTER: B logo */}
        <div className="nav-col-center">
          <a href="#about" className="yc-logo-box">B</a>
        </div>

        {/* RIGHT: nav links (desktop only) */}
        <div className="nav-col-right">
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
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
          <a href="#projects" className="mobile-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="mobile-link" onClick={closeMenu}>Skills</a>
          <a href="#resume" className="mobile-link" onClick={closeMenu}>Resume</a>
          <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
