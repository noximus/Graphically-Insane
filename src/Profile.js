import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className="body-Profile">
      <div className="profile__image">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="cont">
        <profile__info>
          <div className="body--lg">Noximus</div>
          <div>Brooklyn, NY</div>
          <div>
            <button className="btn--primary">Follow</button>
          </div>
        </profile__info>
      </div>
      <div className="experience">
        <div className="cont">
          <div className="cont__title">Experience</div>
          <div className="cont__content">lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
