import React from 'react';
import { Link } from 'react-scroll';
import './Topcontent.css'
const Topcontent = () => {
  return (
    <div className='topcontent'>
      <div className='topcontent__container'>
        <h1>SOVISHNUCHRINGTH V</h1>
        <p>I am a fresher candidate with expected coding skills in web and app development</p>
        <a href="https://drive.google.com/file/d/1qpDP5-1G92IOngKOaMJ_P39_kdR6X-Mv/view?usp=drive_link">
          <button className='topcontent__downloadbutton'>Download CV</button>
        </a>
        <Link to="CORE COMPETENCIES" smooth={true} duration={500}>
          <button className='topcontent__skillsbutton'>My Skills</button>
        </Link>
      </div>
    </div>
  );
};

export default Topcontent;
