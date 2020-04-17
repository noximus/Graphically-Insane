import React from 'react';
import Carousel from './Carousel';
import './Home.css';

const Home = () => {
  return (
    <div className="body-home">
      <div className="jumbotron">
        <div className="main_img"></div>
        <div className="second_img"></div>
        <div className="third_img"></div>
      </div>
      <div className="hero-caro">
        <Carousel element="carousel-class-to-inject" />
      </div>
    </div>
  );
};

export default Home;
