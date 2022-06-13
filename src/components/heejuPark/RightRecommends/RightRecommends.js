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
      <div className="recommendsContents">
        <div className="recommendsFirst">
          <div className="wrapper">
            <div className="first">
              <img
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="firstName">
              <div className="nameId">Golf_bootcamp</div>
              <div className="nameInfo">Alpha님 외 2명이 ...</div>
            </div>
          </div>
          <div className="followBtn">
            <button>팔로우</button>
          </div>
        </div>
        <div className="recommendsSecond">
          <div className="wrapper">
            <div className="second">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="secondName">
              <div className="nameId">Hotel_bootcamp</div>
              <div className="nameInfo">Bravo님 외 10명이 ...</div>
            </div>
          </div>
          <div className="followBtn">
            <button>팔로우</button>
          </div>
        </div>
        <div className="recommendsThird">
          <div className="wrapper">
            <div className="third">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </div>
            <div className="thirdName">
              <div className="nameId">India_bootcamp</div>
              <div className="nameInfo">Charli님 외 12명이 ...</div>
            </div>
          </div>
          <div className="followBtn">
            <button>팔로우</button>
          </div>
        </div>
        <div className="recommendsThird">
          <div className="wrapper">
            <div className="third">
              <img
                src="https://images.unsplash.com/photo-1620476963747-3a235f6fef0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt=""
              />
            </div>
            <div className="thirdName">
              <div className="nameId">Juliet_bootcamp</div>
              <div className="nameInfo">Delta님 외 4명이 ...</div>
            </div>
          </div>
          <div className="followBtn">
            <button>팔로우</button>
          </div>
        </div>
        <div className="recommendsThird">
          <div className="wrapper">
            <div className="third">
              <img
                src="https://images.unsplash.com/photo-1627225316329-70af8308db14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                alt=""
              />
            </div>
            <div className="thirdName">
              <div className="nameId">Kilo_bootcamp</div>
              <div className="nameInfo">Echo님 외 5명이 ...</div>
            </div>
          </div>
          <div className="followBtn">
            <button>팔로우</button>
          </div>
        </div>
        <div className="recommendsThird">
          <div className="wrapper">
            <div className="third">
              <img
                src="https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </div>
            <div className="thirdName">
              <div className="nameId">Lima_bootcamp</div>
              <div className="nameInfo">Foxtrot님 외 20명이 ...</div>
            </div>
          </div>
          <div className="followBtn">
            <button>팔로우</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightRecommends;
