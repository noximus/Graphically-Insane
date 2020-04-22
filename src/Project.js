import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  return (
    <div className="body-Project">
      <div className="jumbotron">
        <div className="hero">
          <div className="button--expand btn-cm">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="content">
            <div className="content__cont">
              <div className="content__title">Main Title</div>
              <div className="content__copy">
                Ut labore et dolore roipi mana aliqua. Enim adeop minim veeniam nostruklad
              </div>
            </div>
          </div>
        </div>
        <div className="dash">
          <div className="dash__cont">
            <div className="body--lg">140K</div>
            <div className="btn--font">Project</div>
          </div>
          <div className="dash__cont">
            <div className="body--lg">24K</div>
            <div className="btn--font">Repositories</div>
          </div>
          <div className="dash__cont">
            <div className="body--lg">1,890</div>
            <div className="btn--font">Following</div>
          </div>
        </div>
        <div className="skills">
          <div className="cont">
            <div className="cont__title">Skills</div>
            <div className="cont__content">
              <button className="btn--inverse">web</button>
              <button className="btn--inverse">illustration</button>
              <button className="btn--inverse">graphics</button>
              <button className="btn--inverse">ui</button>
              <button className="btn--inverse">interface</button>
              <button className="btn--inverse">adobe</button>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="cont">
            <div className="cont__content">Text here</div>
          </div>
        </div>
        <div className="experience">
          <div className="cont">
            <div className="cont__title">Experience</div>
            <div className="cont__content">lorem ipsum dolor sit amet</div>
          </div>
        </div>
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
