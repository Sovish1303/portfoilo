import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
const Header = () => {
  const[selected,setSelected] =useState('');
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Fresh<span>er</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="ABOUT" smooth={true} duration={500}>
          <h4
            className={selected === 'ABOUT ME' ? 'header__right--active' : undefined}
            onClick={() => setSelected('ABOUT ME')}
          >
            ABOUT ME
          </h4>
        </Link>
        <Link to="CORE COMPETENCIES" smooth={true} duration={500}>
          <h4
            className={
              selected === 'CORE COMPETENCIES' ? 'header__right--active' : undefined }
            onClick={() => setSelected('CORE COMPETENCIES')}
          >
            CORE COMPETENCIES
          </h4>
        </Link>
        <Link to="PROJECTS" smooth={true} duration={500}>
          <h4
            className={selected === 'PROJECTS' ? 'header__right--active' : undefined }
            onClick={() => setSelected('PROJECTS')}
          >
            PROJECTS
          </h4>
        </Link>
        <Link to="EXPERIENCE" smooth={true} duration={500}>
          <h4
            className={selected === 'EXPERIENCE' ? 'header__right--active' : undefined }
            onClick={() => setSelected('EXPERIENCE')}
          >
            EXPERIENCE
          </h4>
        </Link>
        <Link to="CONTACT" smooth={true} duration={500}>
          <h4
            className={selected === 'CONTACT' ? 'header__right--active' : undefined }
            onClick={() => setSelected('CONTACT')}
          >
            CONTACT
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
