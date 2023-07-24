import React from 'react'
import { Element } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { Facebook,Instagram,Location } from '@material-ui/icons';
import './Contact.css'
const Contact = () => {
  return (
    <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact__container">
      <p>
        Email : <span>vishnuharish1303@gmail.com</span>
      </p>
      <p>
        Github Username : <span>https://github.com/Sovish1303</span>
      </p>

    </div>
  </Element>

  );
};

export default Contact;
