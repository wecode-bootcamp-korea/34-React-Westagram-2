import React from 'react';
import './Header.scss';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon className="logoIcon" icon={faInstagram} />
        <h2 className="title">Westagram</h2>
      </div>
      <div className="wrapperSearch">
        <input className="searchInput" placeholder="검색" />
      </div>
      <div className="wrapperMenus">
        <FontAwesomeIcon className="menu" icon={faCompass} />
        <FontAwesomeIcon className="menu" icon={faHeart} />
        <FontAwesomeIcon className="menu" icon={faUser} />
      </div>
    </header>
  );
};

export default Header;
