import React, { useRef, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import MenuIcon from './images/btn-menu.svg';
import SettingsIcon from './images/btn-settings.svg';
import './App.css';

import { TweenMax, Bounce, Back, Power3 } from 'gsap';
import Menu from './Menu';
import Home from './Home';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Contact from './Contact';

function App() {
  let menuIconAni = useRef(null);
  let pageMenu = useRef(null);
  let pageOverlay = useRef(null);
  const [menuState, setMenuState] = useState(false);
  useEffect(() => {
    TweenMax.from(menuIconAni, 2, {
      y: -20,
      ease: Bounce.easeOut,
    });
  }, []);

  function toggleMenu(e) {
    if (menuState === false) {
      TweenMax.to(pageMenu, 1.5, {
        left: '65%',
        scale: 0.9,
        ease: Back.easeOut,
      });
      TweenMax.to(pageOverlay, 0.5, {
        opacity: 0.5,
        display: 'block',
        ease: Power3.easeOut,
      });
      setMenuState(true);
    } else {
      TweenMax.to(pageMenu, 1, {
        left: '0',
        scale: 1,
        ease: Back.easeOut,
      });
      TweenMax.to(pageOverlay, 0.5, {
        opacity: 0,
        display: 'none',
        ease: Power3.easeInOut,
      });
      setMenuState(false);
    }
  }
  return (
    <div className="App">
      <Menu />
      <div
        className="page"
        ref={(el) => {
          pageMenu = el;
        }}
      >
        <div
          className="App-overlay"
          ref={(el) => {
            pageOverlay = el;
          }}
        ></div>
        <header className="App-header">
          <div className="btn-menu">
            <button onClick={toggleMenu}>
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
