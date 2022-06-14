import React from 'react';
import { Link } from 'react-router-dom';
import './rightRecommends.scss';

const RightRecommends = props => {
  return (
    <div className="rightRecommends">
      <div className="recommendsTab">
        <div className="tabName">회원님을 위한 추천</div>
        <div className="tabMore">
          <Link to="#">모두 보기</Link>
        </div>
      </div>
      <Recommends />
    </div>
  );
};

const Recommends = () => {
  return (
    <>
      {RECOMMENDS_DATA.map((el, i) => {
        return (
          <div className="recommends" key={el.id}>
            <div className="wrapper">
              <div className="img">
                <img src={el.img} alt="" />
              </div>
              <div className="recommendsName">
                <div className="recommendsNameId">{el.username}</div>
                <div className="recommendsNameInfo">{el.explain}</div>
              </div>
            </div>
            <div className="followBtn">
              <button>팔로우</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const RECOMMENDS_DATA = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    username: 'Golf_bootcamp',
    explain: 'Alpha님 외 2명이 ...',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    username: 'Hotel_bootcamp',
    explain: 'Bravo님 외 10명이 ...',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    username: 'India_bootcamp',
    explain: 'Chalrie님 외 12명이 ...',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1620476963747-3a235f6fef0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    username: 'Juliet_bootcamp',
    explain: 'Delta님 외 4명이 ...',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1627225316329-70af8308db14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
    username: 'Kilo_bootcamp',
    explain: 'Echo님 외 5명이 ...',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    username: 'Lima_bootcamp',
    explain: 'Foxtrot님 외 20명이 ...',
  },
];

export default RightRecommends;
