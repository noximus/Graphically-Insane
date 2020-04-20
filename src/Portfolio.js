import React from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faMicrophone,
  faCode,
  faBiohazard,
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  return (
    <div className="body-portfolio">
      <div className="filter">
        <div className="search">
          <FontAwesomeIcon className="search-input-icon" icon={faSearch} />
          <FontAwesomeIcon className="search-input-icon-right" icon={faMicrophone} />
          <input className="search-input" type="search" name="searchPort" id="search-portfolio" />
        </div>
        <div className="filters">
          <div className="filter-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="filter-icon">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="filter-icon">
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <div className="filter-icon">
            <FontAwesomeIcon icon={faBiohazard} />
          </div>
        </div>
      </div>
      <div className="jumbotron">
        <div className="project1">1</div>
        <div className="project2">2</div>
        <div className="project3">3</div>
        <div className="project4">4</div>
        <div className="project5">5</div>
        <div className="project6">6</div>
        <div className="project7">7</div>
        <div className="project8">8</div>
        <div className="project9">9</div>
        <div className="project10">10</div>
      </div>
    </div>
  );
};

export default Portfolio;
