import React from 'react';
import Header from './components/Header/Header';
import Topcontainer from './components/Topcontainer/Topcontainer';
import Skillscontainer from './components/skills/Skillscontainer';
import './App.css';
import Projectcontainer from './components/Projectcontainer/Projectcontainer';
import ExperienceContainer from './components/Expericecontainer/Experiencecontainer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillscontainer/>
     <Projectcontainer/>
<ExperienceContainer/>
<Contact/>

    </div>
  );
};

export default App;
