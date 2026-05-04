import React from 'react';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="logo">Kalyani.</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;