import React from 'react';
import Reple from '../../../components/jihoonShin/Reple';
import StoryProfile from '../../../components/jihoonShin/StoryProfile';
import './main.scss';
import './mainleft.scss';
import './mainright.scss';
import { useState, useEffect } from 'react';

const Main = () => {
  let [reple, setReple] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [buttonModal, setButtonModal] = useState(false);

  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/searchData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSearchData(data);
      });
  }, []);

  const inputReple = e => {
    e.preventDefault();
    let newValue = [...reple];
    newValue.push(inputValue);
    setReple(newValue);
    e.target.reset();
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: 'rgb(245, 245, 245)' }}
    >
      <nav className="navbar">
        <div className="navbarLogo navbarPadding">
          <div className="navbarLogoIcon">
            <img
              src="/images/jihoonShin/instagram.png"
              alt=""
              style={{ width: '30px' }}
            />
          </div>
          <h3>instagram</h3>
        </div>
        <div className="navbarSearch navbarPadding">
          {/* 검색 기능 구현 미완성 6월 13일 */}
          <input
            type="text"
            placeholder="검색"
            // onChange={e => {
            //   setSearchValue(e.target.value);
            //   {
            //     profile.filter(() => {});
            //   }
            // }}
            onClick={() => {
              setButtonModal(!buttonModal);
            }}
          />

          {buttonModal === true ? (
            <SearchModal
              searchData={searchData}
              setSearchData={setSearchData}
            />
          ) : null}
        </div>
        <div className="navbarProfile navbarPadding">
          <div className="navbarProfileIcon">
            <img
              src="/images/jihoonShin/explore.png"
              alt=""
              style={{ width: '25px' }}
            />
            <img
              src="/images/jihoonShin/heart.png"
              alt=""
              style={{ width: '25px' }}
            />
            <img
              src="/images/jihoonShin/profile.png"
              alt=""
              style={{ width: '25px' }}
            />
          </div>
        </div>
      </nav>

      <div className="feeds">
        <article className="mainLeft">
          <div className="mainLeftHead">
            <div className="headTitle">
              <div className="titleImage">
                <img
                  src="/images/jihoonShin/people_01.jpg"
                  alt=""
                  style={{ width: '70px' }}
                />
              </div>
              <h4>SJH.8730</h4>
            </div>
            <div className="headDot">
              <p>...</p>
            </div>
          </div>
          <div className="mainLeftImage">
            <img src="/images/jihoonShin/color_01.jpg" alt="null" />
          </div>
          <div className="mainLeftContents">
            <div className="contentsIcon">
              <div className="contentsHeart">
                <img
                  src="/images/jihoonShin/heart.png"
                  alt=""
                  style={{ width: '23px' }}
                  className="likeHeart"
                />
                <i className="fa-solid fa-comment-dots" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <div className="contentsPlag">
                <i className="fa-solid fa-font-awesome" />
              </div>
            </div>
            <div className="contentsMessageLike">
              <div className="contentsLikeimage">
                <img src="/images/jihoonShin/blue_01.jpg" alt="null" />
              </div>
              <p>
                <span>SJH.8730</span>님 외 10명이 좋아합니다
              </p>
            </div>
            <div className="contentsMessage">
              {searchData.map((ele, index) => {
                return <CommentReple searchData={searchData} index={index} />;
              })}

              {reple.map((a, i) => {
                return (
                  <Reple
                    inputValue={inputValue}
                    reple={reple}
                    i={i}
                    key={i}
                    setReple={setReple}
                  />
                );
              })}
            </div>
          </div>
          <form className="mainLeftReple" onSubmit={inputReple}>
            <input
              className="mainComment"
              type="text"
              placeholder="댓글 달기..."
              onChange={e => {
                setInputValue(e.target.value);
              }}
            />
            <p
              className="print"
              onClick={() => {
                let newValue = [...reple];
                newValue.push(inputValue);
                setReple(newValue);
              }}
            >
              게시
            </p>
          </form>
        </article>

        <div className="mainRight">
          <div className="mainRightHead">
            <div className="mainRightHeadImage">
              <img src="/images/jihoonShin/pixie_01.jpg" alt="null" />
            </div>
            <div className="mainRightHeadTitle">
              <h4>Wecode_bootcamp</h4>
              <p>Wecode | 위코드</p>
            </div>
          </div>
          <div className="mainRightStory">
            <div className="mainRightStoryTitle">
              <p>스토리</p>
              <h4>모두 보기</h4>
            </div>
            <div className="mainRightStoryProfile">
              <StoryProfile />
            </div>
          </div>
          <div className="mainRightPeople">
            <div className="mainRightPeopleTitle">
              <p>회원님을 위한 추천</p>
              <h4>모두 보기</h4>
            </div>
            <div className="mainRightPeopleProfile">
              <div className="mainRightPeopleBox">
                <div className="mainRightPeopleSet">
                  <div className="peopleIcon">
                    <img src="/images/jihoonShin/Bianchi_01.jpg" alt="null" />
                  </div>
                  <div className="mainRightPeopleName">
                    <h4>Bianchi8730</h4>
                    <p>pixie님 외 2명이...</p>
                  </div>
                </div>
                <p className="mainRightPeopleBoxfollow">팔로우</p>
              </div>

              <div className="mainRightPeopleBox">
                <div className="mainRightPeopleSet">
                  <div className="peopleIcon">
                    <img src="/images/jihoonShin/Darknight.jpg" alt="null" />
                  </div>
                  <div className="mainRightPeopleName">
                    <h4>bet8730</h4>
                    <p>pixie님 외 2명이...</p>
                  </div>
                </div>
                <p className="mainRightPeopleBoxfollow">팔로우</p>
              </div>

              <div className="mainRightPeopleBox">
                <div className="mainRightPeopleSet">
                  <div className="peopleIcon">
                    <img src="/images/jihoonShin/shoes_01.jpg" alt="null" />
                  </div>
                  <div className="mainRightPeopleName">
                    <h4>shoes8730</h4>
                    <p>pixie님 외 2명이...</p>
                  </div>
                </div>
                <p className="mainRightPeopleBoxfollow">팔로우</p>
              </div>
            </div>
          </div>

          <div className="mainRightInfo">
            <div className="mainRightInfofirst">
              <p>
                instagram 정보 . 지원 . 홍보 센터 . API . 채용정보 .
                개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
              </p>
            </div>
            <div className="mainRightInfolast">2022 INSTAGRAM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SearchModal = props => {
  return (
    <div className="searchModal">
      {props.searchData.map((ele, index) => {
        return (
          <div className="SearchProfileSet">
            <div className="SearchProfileIcon">
              <img src="/images/jihoonShin/car1.png" alt="null" />
            </div>
            <div className="SearchProfileName">
              <h4>ddd</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentReple = props => {
  return (
    <p>
      <span>{props.searchData[props.index].title}</span>
      {props.searchData[props.index].content}
    </p>
  );
};

export default Main;
