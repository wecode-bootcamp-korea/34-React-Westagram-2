import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import '../../../styles/common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpFromBracket,
  faEllipsis,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faCopyright,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import CommentBox from '../../../components/heejuPark/CommentBox/CommentBox';
import FeedsLike from '../../../components/heejuPark/FeedsLike/FeedsLike';
import RightStories from '../../../components/heejuPark/RightStories/RightStories';
import RightRecommends from '../../../components/heejuPark/RightRecommends/RightRecommends';
import Nav from '../../../components/heejuPark/Nav/Nav';

const Main = props => {
  // 댓글 기능에 필요한 state값
  const [names, setNames] = useState([{ id: 1, username: '', text: '' }]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(2);
  // 댓글 게시 버튼 활성화 및 비활성화에 필요한 state값
  const [activate, setActivate] = useState(false);
  // 댓글 게시 버튼 활성화 및 비활성화 조건
  useEffect(() => {
    // inputText.length === 0 ? setActivate(true) : setActivate(false);
    setActivate(inputText.length === 0);
  }, [inputText]);

  // 댓글 기능구현
  const onChange = e => {
    setInputText(e.target.value);
  };
  const onClick = e => {
    e.preventDefault();
    const nextNames = names.concat({
      id: nextId,
      username: 'hjpark625',
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames); // names의 값 업데이트
    setInputText(''); // 댓글 종료 후 초기화
  };
  // 댓글 삭제기능 구현
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  return (
    <div className="main">
      <Nav />
      <main className="mainPage">
        <section className="feeds">
          <article className="feedsContents">
            <header className="account">
              <div className="miniPhoto">
                <img src="/images/heejuPark/618A000834.jpg" alt="profile" />
              </div>
              <span className="name">hjpark625</span>
              <span className="moreBtn">
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </header>
            <div className="feedsImg">
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="iconsBundle">
              <div className="iconsWrapper">
                <FeedsLike />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
              </div>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className="explanation">
              <div className="whoLikes">
                <img src="/images/heejuPark/618A000834.jpg" alt="profile" />
                <span className="likesText">
                  hjpark625님 외 10명이 좋아합니다.
                </span>
              </div>
              <div className="expContents">
                <div className="comment">
                  <b>canon_mj</b> 산이다 산...{' '}
                  <span className="moreContents">
                    <Link to="#">더 보기</Link>
                  </span>
                </div>
                <div className="comment">
                  <b>neceosecius</b> 거봐 산이 멋지잖아! 🙆‍♂️
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="postTime">42분 전</div>
                <CommentBox names={names} onRemove={onRemove} />
              </div>
            </div>
            <form className="commentBox">
              <input
                className="mainCommentBox"
                type="text"
                placeholder="댓글 달기..."
                value={inputText}
                onChange={onChange}
              />
              <button
                className="mainCommentBtn"
                onClick={onClick}
                disabled={activate}
              >
                게시
              </button>
            </form>
          </article>
        </section>
        <section className="mainRight">
          <div className="rightProfile">
            <div className="rightImg">
              <img
                src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="rightName">
              <div className="nameId">Lego_bootcamp</div>
              <div className="nameInfo">Lego | 레고</div>
            </div>
          </div>
          <RightStories />
          <RightRecommends />
          <footer className="info">
            <Link to="#">Instagram 정보 ·</Link>
            <Link to="#">지원 ·</Link>
            <Link to="#">홍보센터 ·</Link>
            <Link to="#">API ·</Link>
            <Link to="#">채용 정보 ·</Link>
            <Link to="#">개인정보처리방침 ·</Link>
            <Link to="#">약관 ·</Link>
            <Link to="#">디렉터리 ·</Link>
            <Link to="#">프로필 ·</Link>
            <Link to="#">해시태그 ·</Link>
            <Link to="#">언어</Link>
            <p>
              <FontAwesomeIcon icon={faCopyright} />
              &nbsp;2019 INSTAGRAM
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Main;
