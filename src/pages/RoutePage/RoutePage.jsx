import React from 'react';
import { Link } from 'react-router-dom';
import './routePage.scss';
const RoutePage = props => {
  const userList = [
    {
      id: 'hyun',
      name: '백광현',
      link: 'login-hyun',
    },
    {
      id: 'saem',
      name: '서한샘',
      link: 'login-saem',
    },
    {
      id: 'hee',
      name: '박희주',
      link: 'login-hee',
    },
    {
      id: 'hoon',
      name: '신지훈',
      link: 'login-hoon',
    },
    {
      id: 'yeon',
      name: '박수연',
      link: 'login-yeon',
    },
  ];
  return (
    <div className="routePage">
      <h1 className="title">34기 westagram 2팀!</h1>
      <ul className="linkList">
        {userList.map(user => {
          return (
            <li key={user.id} className="link">
              <Link className="linkText" to={user.link}>
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoutePage;
