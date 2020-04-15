import React, { useRef, useEffect } from 'react';
import MenuIcon from './images/btn-menu.svg';
import SettingsIcon from './images/btn-settings.svg';
import './App.css';

import { TweenMax, Bounce } from 'gsap';

function App() {
  let menuIconAni = useRef(null);
  let pageMenu = useRef(null);
  useEffect(() => {
    TweenMax.from(menuIconAni, 2, {
      y: -20,
      ease: Bounce.easeOut,
    });
  }, []);

  function openMenu(e) {
    TweenMax.to(pageMenu, 3, {
      left: '80%',
      scale: 0.9,
      ease: Bounce.easeOut,
    });
  }
  return (
    <div className="App">
      <div
        className="page"
        ref={(el) => {
          pageMenu = el;
        }}
      >
        <header className="App-header">
          <div className="btn-menu">
            <button onClick={openMenu}>
              <img
                ref={(el) => {
                  menuIconAni = el;
                }}
                src={MenuIcon}
                alt="menu"
              />
            </button>
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
    </div>
  );
}

export default App;
