import React from 'react';
import Carousel from './Carousel';

const Profile = () => {
  return (
    <div className="body">
      <div className="jumbotron">
        <div className="main_img">Profile</div>
        <div className="second_img"></div>
        <div className="third_img"></div>
      </div>
      <div className="hero-caro">
        <Carousel element="carousel-class-to-inject" />
      </div>
    </div>
  );
};

export default Profile;
