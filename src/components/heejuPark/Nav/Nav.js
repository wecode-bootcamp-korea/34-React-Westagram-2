import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.scss';

const Nav = props => {
  return (
    <nav className="navbar">
      <div className="westa">
        <span className="westaLogo">
          <FontAwesomeIcon icon={faInstagram} />
        </span>
        <span className="westaTitle">Westagram</span>
      </div>
      <label className="searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="검색" />
      </label>
      <div className="navbarIcons">
        <ul>
          <li>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="compass"
            />
          </li>
          <li>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
          </li>
          <li>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="my info"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
