import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  return (
    <footer>
      <div className="footer-nav">
        <div className="icon icon-1">
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <div className="icon icon-1">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="icon icon-1">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icon icon-1">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="icon icon-1">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </footer>
  );
};

export default Portfolio;
