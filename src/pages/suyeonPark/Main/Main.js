import React, { useState } from 'react';
import './main.scss';
import UserComment from './UserComment';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [replyList, setReplyList] = useState([]);

  const addItem = () => {
    setReplyList([...replyList, inputValue]);
    setInputValue(''); //댓글이 달리면 인풋창 초기화
  };

  const [colorAbled, setColorAbled] = useState('#b2dffc'); //조건에 부합하면 색 바뀜
  const [disabled, setDisabled] = useState('disabled'); //조건에 부합하기 전까지 버튼 클릭 막음

  const replyButtonabled = () => {
    if (inputValue.length > 0) {
      setColorAbled('#0195f7');
      setDisabled('');
    } else {
      setColorAbled('#b2dffc');
      setDisabled('disabled');
    }
  };

  //form 태그 새로 고침 막기
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div class="main">
      <nav class="navigationBox">
        <div class="navBar">
          <div class="westaLogo">
            <i class="fa-brands fa-instagram" />
            <a href="">Westagram</a>
          </div>
          <div class="searchBar">
            <i class="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="검색" />
          </div>
          <div class="emoji">
            <i class="fa-regular fa-compass" />
            <i class="fa-regular fa-heart" />
            <i class="fa-regular fa-user" />
          </div>
        </div>
      </nav>
      <main class="mainBox">
        <div class="feeds">
          <div class="profile">
            <header>
              <img alt="profile image" src="./images/suyeonPark/profile.jpg" />
              <span> _sooyuni </span>
            </header>
            <i class="fa-solid fa-ellipsis" />
          </div>
          <img alt="feed image" src="./images/suyeonPark/feedimg.jpg" />
          <div class="feedButton">
            <button>
              <i class="fa-regular fa-heart" />
            </button>
            <button>
              <i class="fa-regular fa-comment" />
            </button>
            <button>
              <i class="fa-solid fa-arrow-up-from-bracket" />
            </button>
            <button>
              <i class="fa-regular fa-bookmark" />
            </button>
          </div>
          <div class="replyBox">
            <img alt="replyuserimg" src="./images/suyeonPark/replyuser.jpg" />
            <p>
              <span>dduddu92</span>님 <span>외 10명</span>이 좋아합니다
            </p>
          </div>
          <div class="myPost">
            <span id="myId">_sooyuni</span>
            <p>제주도 첫 날에 갔던 스누피 가든...</p>
            <a href="">더 보기</a>
          </div>
          <p class="showCommentAll">
            댓글 <span>{replyList.length}개 모두 보기</span>
          </p>
          <UserComment replyList={replyList} setReplyList={setReplyList} />
          <div class="writingTime">
            <span>1시간 전</span>
          </div>
          <div class="myComment">
            <form onSubmit={handleSubmit}>
              <input
                class="myCommentInput"
                type="text"
                placeholder="댓글 달기..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyUp={replyButtonabled}
              />
              <button
                class="myCommentButton"
                disabled={disabled}
                style={{ color: colorAbled }}
                onClick={addItem}
              >
                게시
              </button>
            </form>
          </div>
        </div>
        <div class="mainRight">
          <div class="myWestaInfo">
            <img alt="userprofile" src="./images/suyeonPark/profile.jpg" />
            <div class="myWestaInfoUser">
              <a href="">_sooyuni</a>
              <span>수연</span>
            </div>
          </div>
          <div class="story">
            <div class="storyInText">
              <span>스토리</span>
              <a href="">모두 보기</a>
            </div>
            <ul class="storyInUsers">
              <li>
                <img
                  alt="story user pictures"
                  src="./images/suyeonPark/aeong.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_imAeong</span>
                  <span class="mainRightGrayText">16분 전</span>
                </div>
              </li>
              <li>
                <img
                  alt="story user pictures"
                  src="./images/suyeonPark/dori.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_imDori</span>
                  <span class="mainRightGrayText">36분 전</span>
                </div>
              </li>
              <li>
                <img
                  alt="story user pictures"
                  src="./images/suyeonPark/halbae.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_imHalbae</span>
                  <span class="mainRightGrayText">1시간 전</span>
                </div>
              </li>
              <li>
                <img
                  alt="story user pictures"
                  src="./images/suyeonPark/halbbu.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_imBbuni</span>
                  <span class="mainRightGrayText">2시간 전</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="recommendForMe">
            <div class="recommendInText">
              <span>회원님을 위한 추천</span>
              <a href="">모두 보기</a>
            </div>
            <ul class="recommendInUsers">
              <li>
                <img
                  alt="recommend user pictures"
                  src="./images/suyeonPark/jjoggumi.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_jjoggumi</span>
                  <span class="mainRightGrayText">_sooyuni님 외 12명이...</span>
                </div>
                <a href="">팔로우</a>
              </li>
              <li>
                <img
                  alt="recommend user pictures"
                  src="./images/suyeonPark/laon.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_choilaon</span>
                  <span class="mainRightGrayText">
                    _nurizzang님 외 22명이...
                  </span>
                </div>
                <a href="">팔로우</a>
              </li>
              <li>
                <img
                  alt="recommend user pictures"
                  src="./images/suyeonPark/samsaeg.jpg"
                />
                <div class="allListInDiv">
                  <span class="mainRightUserId">_hasamsaeg</span>
                  <span class="mainRightGrayText">_hahaha님 외 62명이...</span>
                </div>
                <a href="">팔로우</a>
              </li>
            </ul>
          </div>
          <footer>
            <div class="footerInfoLink">
              <a href="">Westagram 정보</a>
              <span>·</span>
              <a href="">지원</a>
              <span>·</span>
              <a href="">홍보 센터</a>
              <span>·</span>
              <a href="">API</a>
              <span>·</span>
              <br />
              <a href="">채용 정보</a>
              <span>·</span>
              <a href="">개인정보처리방침</a>
              <span>·</span>
              <a href="">약관</a>
              <span>·</span>
              <br />
              <a href="">디렉터리</a>
              <span>·</span>
              <a href="">프로필</a>
              <span>·</span>
              <a href="">해시태그</a>
              <span>·</span>
              <a href="">언어</a>
            </div>
            <span>&copy; 2022 WESTARAM</span>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Main;
