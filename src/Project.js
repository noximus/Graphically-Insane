import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faCode, faBiohazard } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
  return (
    <div className="body-Project">
      <div className="jumbotron">
        <div className="hero"></div>
        <div className="dash">
          <div>Projects</div>
          <div>Brands</div>
          <div>Years</div>
        </div>
        <div className="skills">Skills</div>
        <div className="about">About</div>
        <div className="experience">Experience</div>
        <div className="project6">6</div>
        <div className="project7">7</div>
        <div className="project8">8</div>
        <div className="project9">9</div>
        <div className="project10">10</div>
      </div>
    </div>
  );
};

export default Project;
