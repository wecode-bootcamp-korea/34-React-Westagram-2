import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommentLine from '../CommentLine/CommentLine';
import FeedsLike from '../FeedsLike/FeedsLike';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feeds = () => {
  // 댓글 기능에 필요한 state값
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch('data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, []);
  const [names, setNames] = useState(commentData);
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
    <div>
      {FEEDS_DATA.map((el, i) => {
        return (
          <section className="feeds" key={el.id}>
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
                <img src={el.feedimg} alt="" />
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
                  <img src={el.likesimg} alt="profile" />
                  <span className="likesText">{el.likestext}</span>
                </div>
                <div className="expContents">
                  <div className="comment">
                    <b>hjpark625</b> 산이다 산...{' '}
                    <span className="moreContents">
                      <Link to="#">더 보기</Link>
                    </span>
                  </div>
                  <div className="postTime">42분 전</div>
                  <CommentLine names={names} onRemove={onRemove} />
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
        );
      })}
    </div>
  );
};

const FEEDS_DATA = [
  {
    id: 1,
    feedimg:
      'https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    likesimg: '/images/heejuPark/618A000834.jpg',
    likestext: 'hjpark625님 외 10명이 좋아합니다.',
  },
  {
    id: 2,
    feedimg:
      'https://images.unsplash.com/photo-1543359786-1f50af0dc4bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    likesimg: '/images/heejuPark/618A000834.jpg',
    likestext: 'hjpark625님 외 10명이 좋아합니다.',
  },
];

// const COMMENT_DATA = [{ id: 1, username: '', text: '' }];

export default Feeds;
