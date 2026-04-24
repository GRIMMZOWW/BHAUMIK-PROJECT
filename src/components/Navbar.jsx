import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo" style={{ textTransform: 'uppercase' }}>Bhaumik S.</div>
      <ul className="nav-links">
        <li><a href="#about">Profile</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Tools</a></li>
        <li><a href="#resume">CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
