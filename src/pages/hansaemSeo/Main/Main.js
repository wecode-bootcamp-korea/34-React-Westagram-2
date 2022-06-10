import React, { useState } from 'react';
import Feeds from '../../../components/hansaemSeo/Feeds/Feeds';
import Footer from '../../../components/hansaemSeo/Footer/Footer';
import Header from '../../../components/hansaemSeo/Header/Header';
import UserCard from '../../../components/hansaemSeo/UserCard/UserCard';
import UserCards from '../../../components/hansaemSeo/UserCards/UserCards';
import './main.scss';

const DEFAULT_FEEDS = [
  {
    feedId: 1,
    userInfo: {
      userName: 'kor-sams-dev',
      userImage: '/images/hansaemSeo/feed-user1.jpg',
    },
    feedImage: '/images/hansaemSeo/feed-image1.jpg',
    feedLikeMessage: 'aineworld님 외 10명이 좋아합니다',
    feedLikeUserImage: '/images/hansaemSeo/feed-comment.jpg',
    comments: [
      {
        id: 0,
        userName: 'kor-sams-dev',
        comment: '반짝반짝 자근별 아름답게 떠있네',
        isAbleLike: false,
        isAbleDelete: false,
      },
      {
        id: 1,
        userName: 'neceosecuss',
        comment: '이뿐 별이 보임니당',
      },
    ],
  },
  {
    feedId: 2,
    userInfo: {
      userName: 'feeddd2',
      userImage: '/images/hansaemSeo/feed-user2.jpg',
    },
    feedImage: '/images/hansaemSeo/feed-image2.jpg',
    feedLikeMessage: 'sdcaewc님 외 230명이 좋아합니다',
    feedLikeUserImage: '/images/hansaemSeo/feed-image3.jpg',
    comments: [
      {
        id: 0,
        userName: 'feeddd2',
        comment: '제주에 오길 잘했네..잘했어..',
        isAbleLike: false,
        isAbleDelete: false,
      },
      {
        id: 1,
        userName: 'kor-sams-dev',
        comment: '나도 제주도...ㅜㅠ',
      },
    ],
  },
];

const Main = props => {
  const myInfo = {
    userName: 'kor-sams-dev',
    userImage: '/images/hansaemSeo/me-icon.jpg',
    imageSize: 'normal',
    userSubDescription: "hansam | it's me",
  };
  const storyUsers = [
    {
      userImage: '/images/hansaemSeo/feed-user1.jpg',
      userName: '_yum_s',
      userSubDescription: '16분 전',
      isPinkRound: true,
    },
    {
      userImage: '/images/hansaemSeo/feed-user2.jpg',
      userName: 'drink_eat_drink',
      userSubDescription: '3시간 전',
      isPinkRound: true,
    },
    {
      userImage: '/images/hansaemSeo/feed-user3.jpg',
      userName: 'hyukyc',
      userSubDescription: '20시간 전',
      isPinkRound: true,
    },
    {
      userImage: '/images/hansaemSeo/recomand-icon1.jpg',
      userName: 'jminkeek',
      userSubDescription: '2일 전',
      isPinkRound: true,
    },
    {
      userImage: '/images/hansaemSeo/recomand-icon2.jpg',
      userName: '_yum_s2',
      userSubDescription: '365일 전',
      isPinkRound: true,
    },
  ];

  const recomandUsers = [
    {
      userImage: '/images/hansaemSeo/recomand-icon1.jpg',
      userName: 'joaaaaaaahy',
      userSubDescription: '_legend_a님 외2 명이 ...',
      isAbleFollow: true,
    },
    {
      userImage: '/images/hansaemSeo/recomand-icon2.jpg',
      userName: 'rampart91',
      userSubDescription: 'ringo,in.seoul님 외 12..',
      isAbleFollow: true,
    },
    {
      userImage: '/images/hansaemSeo/recomand-icon3.jpg',
      userName: 'shawnjjoo',
      userSubDescription: 'jimmylee21212님 외 1...',
      isAbleFollow: true,
    },
    {
      userImage: '/images/hansaemSeo/feed-user2.jpg',
      userName: 'shawnjjoow21',
      userSubDescription: 'jimmylee21212님 외 1...',
      isAbleFollow: true,
    },
  ];

  const [feeds, setFeeds] = useState(DEFAULT_FEEDS);

  const handleAddComment = (feed, comment) => {
    const newId = new Date().getTime();
    setFeeds(oldFeeds => {
      return oldFeeds.map(oldFeed => {
        if (oldFeed.feedId === feed.feedId) {
          oldFeed.comments.push({
            id: newId,
            userName: 'kor-sams-dev',
            comment: comment,
          });
          return oldFeed;
        } else {
          return oldFeed;
        }
      });
    });
  };

  return (
    <div className="main">
      <Header />
      <main className="main-feeds">
        <Feeds feeds={feeds} onAddComment={handleAddComment} />
        <nav className="main-nav">
          <div className="wrapper-user">
            <UserCard userCard={myInfo} />
          </div>
          <div className="nav-wrapper-story round-border">
            <div className="story-title-wrapper">
              <span className="story-title">스토리</span>
              <span className="story-all">모두 보기</span>
            </div>
            <div className="storys">
              <UserCards userCards={storyUsers} />
            </div>
          </div>
          <div className="nav-wrapper-recommand round-border">
            <div className="recommand-title-wrapper">
              <span className="recommand-title">회원님을 위한 추천</span>
              <span className="recommand-all">모두 보기</span>
            </div>
            <div className="recommands">
              <UserCards userCards={recomandUsers} />
            </div>
          </div>
          <Footer />
        </nav>
      </main>
    </div>
  );
};

export default Main;
