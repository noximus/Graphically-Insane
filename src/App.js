import React, { useRef, useEffect } from 'react';
import MenuIcon from './images/btn-menu.svg';
import SettingsIcon from './images/btn-settings.svg';
import './App.css';

import { TweenMax, Bounce } from 'gsap';

function App() {
  let menuIconAni = useRef(null);
  useEffect(() => {
    TweenMax.from(menuIconAni, 2, {
      y: -20,
      ease: Bounce.easeOut,
    });
  }, []);
  // console.log(menuIcon);
  return (
    <div className="App">
      <header className="App-header">
        <div className="btn-menu">
          <img
            ref={(el) => {
              menuIconAni = el;
            }}
            src={MenuIcon}
            alt="menu"
          />
        </div>
        <div className="brand">Graphically Insane</div>
        <div className="btn-settings">
          <img src={SettingsIcon} alt="settings" />
        </div>
      </header>
      <div className="body">
        <div className="jumbotron">
          <div className="main_img"></div>
          <div className="second_img"></div>
          <div className="third_img"></div>
        </div>
      </div>
      <footer>
        <div className="footer-nav">
          <div className="icon icon-1">1</div>
          <div className="icon icon-1">2</div>
          <div className="icon icon-1">3</div>
          <div className="icon icon-1">4</div>
          <div className="icon icon-1">5</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
