import React from "react";
import skillImg from "../../image/it.jpeg";
//import LinearProgress from "@material-ui/core/LinearProgress";
import { Element } from "react-scroll";

import './Skillscontainer.css';


const SkillContainer = () => {
  return (
    
     
    <Element className="skillContainer" id="CORE COMPETENCIES">
  
      <div className="skillContainer__image">
        <img src={skillImg} alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>CORE COMPETENCIES</h2>
        <div className="skillContainer__skillSet"> 
          <h5>CATIA</h5>
          <div className="skillContainer__slider skillContainer__slider1">
          
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>SOILD WORKS</h5>
          <div className="skillContainer__slider skillContainer__slider2">
           
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>JAVA</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            
           </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>SQL</h5>
          <div className="skillContainer__slider skillContainer__slider4">
           </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>HTML,CSS,JAVASCRIPT</h5>
          <div className="skillContainer__slider skillContainer__slider5">
           
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>REACTJS</h5>
          <div className="skillContainer__slider skillContainer__slider6">
           
            </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer; 