import React from 'react';
import { Link } from 'react-router-dom';
import './rightStories.scss';

const RightStories = props => {
  return (
    <div className="rightStories">
      <div className="storiesTab">
        <div className="tabName">스토리</div>
        <div className="tabMore">
          <Link to="#">모두 보기</Link>
        </div>
      </div>
      <div className="otherStories">
        <Stories />
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <>
      {STORIES_DATA.map((el, i) => {
        return (
          <div className="stories" key={el.id}>
            <div className="storiesImg">
              <img src={el.img} alt="" />
            </div>
            <div className="storiesName">
              <div className="storiesNameId">{el.username}</div>
              <div className="storiesNameInfo">{el.time}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const STORIES_DATA = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1606878323177-265211499dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    username: 'Alpha_bootcamp',
    time: '16분 전',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1642101566158-5c2d5dfed57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
    username: 'Bravo_bootcamp',
    time: '3시간 전',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1524009901480-a6fa1c0c8ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    username: 'Charlie_bootcamp',
    time: '20시간 전',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1538603644737-89b694ec9214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80',
    username: 'Delta_bootcamp',
    time: '1시간 전',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1501605623075-d5715e4637ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    username: 'Echo_bootcamp',
    time: '12시간 전',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    username: 'Foxtrot_bootcamp',
    time: '15분전',
  },
];

export default RightStories;
