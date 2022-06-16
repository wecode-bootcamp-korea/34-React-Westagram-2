import React from 'react';
import '../../../pages/gwanghyunBaek/Main/main.scss';

const MainRightMiddle = () => {
  return profileData.map(items => {
    return (
      <div className="story_profile" key={items.id}>
        <img className="story_img1" src={items.img} alt="story_pic" />
        <div className="story_name1">
          <span>{items.name}</span>
          <span>{items.hour}</span>
        </div>
      </div>

      // <div className="story_profile">
      //   <img
      //     className="story_img1"
      //     src="/images/gwanghyunBaek/hayeon2.jpeg"
      //     alt=""
      //   />
      //   <div className="story_name1">
      //     <span>hayeon</span>
      //     <span>1시간 전</span>
      //   </div>
      // </div>
      // <div className="story_profile">
      //   <img
      //     className="story_img1"
      //     src="/images/gwanghyunBaek/hayeon3.jpeg"
      //     alt=""
      //   />
      //   <div className="story_name1">
      //     <span>hayeon</span>
      //     <span>30분 전</span>
      //   </div>
      // </div>
      // <div className="story_profile">
      //   <img
      //     className="story_img1"
      //     src="/images/gwanghyunBaek/hayeon4.jpeg"
      //     alt=""
      //   />
      //   <div className="story_name1">
      //     <span>hayeon</span>
      //     <span>10분 전</span>
      //   </div>
      // </div>
      // <div className="story_profile">
      //   <img
      //     className="story_img1"
      //     src="/images/gwanghyunBaek/hayeon1.jpeg"
      //     alt=""
      //   />
      //   <div className="story_name1">
      //     <span>hayeon</span>
      //     <span>2시간 전</span>
      //   </div>
      // </div>
      // <div className="story_profile">
      //   <img
      //     className="story_img1"
      //     src="/images/gwanghyunBaek/hayeon1.jpeg"
      //     alt=""
      //   />
      //   <div className="story_name1">
      //     <span>hayeon</span>
      //     <span>2시간 전</span>
      //   </div>
      //   </div>
      // </div>
    );
  });
};

const profileData = [
  {
    id: 1,
    name: 'hayeon',
    hour: '2시간전',
    img: '/images/gwanghyunBaek/hayeon1.jpeg',
  },
  {
    id: 2,
    name: 'hayeon',
    hour: '1시간전',
    img: '/images/gwanghyunBaek/hayeon2.jpeg',
  },
  {
    id: 3,
    name: 'hayeon',
    hour: '30분전',
    img: '/images/gwanghyunBaek/hayeon3.jpeg',
  },
  {
    id: 4,
    name: 'Gwanghyun',
    hour: '15분전',
    img: '/images/gwanghyunBaek/hayeon4.jpeg',
  },
  {
    id: 5,
    name: 'bbbb_0221',
    hour: '5분전',
    img: '/images/gwanghyunBaek/me2.jpeg',
  },
];

export default MainRightMiddle;
