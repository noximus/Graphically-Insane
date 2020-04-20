import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faToiletPaperSlash,
  faUserNinja,
  faSatellite,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <div className="menu-brand">GI</div>
        <div className="menu-brand">Graphically Insane</div>
      </div>
      <div className="menu-body">
        <ul className="menu-nav">
          <li className="menu-nav-items">
            <Link to="/">
              <span className="menu-nav-item-icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="menu-nav-item-text">Home</span>
            </Link>
          </li>
          <li className="menu-nav-items">
            <Link to="/portfolio">
              <span className="menu-nav-item-icon">
                <FontAwesomeIcon icon={faToiletPaperSlash} />
              </span>
              <span className="menu-nav-item-text">Portfolio</span>
            </Link>
          </li>
          <li className="menu-nav-items">
            <Link to="/portfolio">
              <span className="menu-nav-item-icon">
                <FontAwesomeIcon icon={faToiletPaperSlash} />
              </span>
              <span className="menu-nav-item-text">Project</span>
            </Link>
          </li>
          <li className="menu-nav-items">
            <span className="menu-nav-item-icon">
              <FontAwesomeIcon icon={faUserNinja} />
            </span>
            <span className="menu-nav-item-text">Profile</span>
          </li>
          <li className="menu-nav-items">
            <span className="menu-nav-item-icon">
              <FontAwesomeIcon icon={faSatellite} />
            </span>
            <span className="menu-nav-item-text">Contact</span>
          </li>
        </ul>
      </div>
      <div className="menu-footer">
        <div className="menu-nav-item-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <span>Search Content ...</span>
      </div>
    </div>
  );
};

export default Menu;
