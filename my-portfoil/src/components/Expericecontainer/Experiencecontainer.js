import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../Experience/Experience'
import './Experiencecontainer.css'

const Experiencecontainer = () => {
    return (
        <Element className="experienceContainer" id="exp">
          <h1>Experience</h1>
          <div className="experienceContainer__info">
            <Experience number="1+" title="inten" />
            <Experience
              number="7+"
              title="Projects"
              style={{ backgroundColor: "#f64c08" }}
            />
            <Experience number="6+" title="online course" />
            <Experience number="100+" title="Students got trained in NCC" />
          </div>
        </Element>
        
  )
}

export default Experiencecontainer
