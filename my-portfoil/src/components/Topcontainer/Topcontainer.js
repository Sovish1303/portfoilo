import React from 'react';
import { Element } from 'react-scroll';
import Topcontent from '../Topcontent/Topcontent';
import './Topcontainter.css';

const Topcontainer = () => {
  return (
    <Element name="ABOUT ME" className='topcontainer'>
      <Topcontent />
    </Element>
  );
};

export default Topcontainer;
