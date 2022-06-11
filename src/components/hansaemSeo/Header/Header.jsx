import React, { useEffect, useState } from 'react';
import './Header.scss';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';

const SEARCH_USER_LIST = [
  {
    id: 1,
    userName: 'kor-sams-dev',
    userImage: '/images/hansaemSeo/me-icon.jpg',
    userSubDescription: "hansam | it's me",
  },
  {
    userName: 'first-user',
    userImage: '/images/hansaemSeo/feed-user1.jpg',
    userSubDescription: "i'm first!!!!!!",
  },
  {
    id: 2,
    userName: 'second-user',
    userImage: '/images/hansaemSeo/feed-user2.jpg',
    userSubDescription: '내가 두번째다!',
  },
  {
    id: 3,
    userName: 'third-111',
    userImage: '/images/hansaemSeo/feed-user3.jpg',
    userSubDescription: 'ittttt so goood',
  },
  {
    id: 4,
    userName: 'third-111',
    userImage: '/images/hansaemSeo/feed-user3.jpg',
    userSubDescription: 'ittttt so goood',
  },
  {
    id: 5,
    userName: 'third-111',
    userImage: '/images/hansaemSeo/feed-user3.jpg',
    userSubDescription: 'ittttt so goood',
  },
];

const Header = props => {
  const [searchUserList, setSearchUserList] = useState(SEARCH_USER_LIST);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchUserList(
      SEARCH_USER_LIST.filter(el => el.userName.includes(searchText))
    );
  }, [searchText]);

  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon className="logoIcon" icon={faInstagram} />
        <Link className="linkText" to="/login-saem">
          <h2 className="title">Westagram</h2>
        </Link>
      </div>
      <div className="wrapperSearch">
        <input
          className="searchInput"
          placeholder="검색"
          value={searchText}
          onChange={ev => {
            setSearchText(ev.target.value);
          }}
        />
        <div className="searchBoxWrapper">
          <ul className="searchBox">
            {searchUserList.map(user => {
              return (
                <li className="searchItem" key={user.id}>
                  <UserCard userCard={user} />
                </li>
              );
            })}
          </ul>
        </div>
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
