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
              <div className="menu-nav-item-icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <span>Home</span>
            </Link>
          </li>
          <li className="menu-nav-items">
            <Link to="/portfolio">
              <div className="menu-nav-item-icon">
                <FontAwesomeIcon icon={faToiletPaperSlash} />
              </div>
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="menu-nav-items">
            <div className="menu-nav-item-icon">
              <FontAwesomeIcon icon={faUserNinja} />
            </div>
            <span>Profile</span>
          </li>
          <li className="menu-nav-items">
            <div className="menu-nav-item-icon">
              <FontAwesomeIcon icon={faSatellite} />
            </div>
            <span>Contact</span>
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
