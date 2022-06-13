import './main.scss';
import React from 'react';
import '../../../styles/reset.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
  const [textInput, setTextInput] = useState('');
  const [postTextInput, setPostTextInput] = useState([]);
  const [userId] = useState('bbbb0221');
  const eventInput = e => setTextInput(e.target.value);

  return (
    <>
      <nav>
        <div className="insta_icons">
          <span className="icons_span">
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-brands fa-instagram"
            />
          </span>
          <span className="nav_title">westagram</span>
        </div>
        <div className="input_box">
          <input className="nav_input" type="text" placeholder="검색" />
          <FontAwesomeIcon icon={faSearchengin} className="fa_search" />
        </div>
        <div className="nav_icons">
          <img
            className="nachimban"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt=""
          />
          <img
            className="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
          <img
            className="user"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt=""
          />
        </div>
      </nav>
      <div className="width_">
        <main>
          <div className="feeds">
            <div className="article">
              <div className="main_post">
                <div className="main_profile">
                  <div className="main_profile_name">
                    <img
                      className="main_profile_img"
                      src="/images/gwanghyunBaek/me1.jpeg"
                      alt=""
                    />
                    <div className="main_profile_id">
                      <span className="first_id">bbbb_0221</span>
                      <span className="second_id">bbb_0221</span>
                    </div>
                  </div>
                  <span>
                    <FontAwesomeIcon icon={faEllipsis} className="faEllipsis" />
                  </span>
                </div>
              </div>
              <div className="main_img">
                <img
                  className="big_me"
                  src="/images/gwanghyunBaek/me2.jpeg"
                  alt=""
                />
              </div>
              <div className="main_feeds">
                <div className="feeds_option">
                  <svg
                    aria-label="좋아요"
                    className="_8-yf5 "
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                  </svg>
                  <svg
                    aria-label="댓글 달기"
                    className="_8-yf5 "
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg
                    aria-label="게시물 공유"
                    className="_8-yf5 "
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <FontAwesomeIcon icon={faBookmark} className="bookmark" />
              </div>
              <div className="like_up">
                <img
                  className="like_man"
                  src="/images/gwanghyunBaek/pic4.avif"
                  alt=""
                />
                <span>bbbb_0221님 외 4명이 좋아합니다.</span>
              </div>
              <div className="feeds_post">
                <span>bbbb_0221</span>
                <span>나는 왜 안돼 </span>
                <span className="after_view"> 더 보기</span>
                <div className="hour_ago">
                  <span>1시간 전</span>
                </div>

                {postTextInput.map((a, i) => {
                  return (
                    <AddComment
                      setPostTextInput={setPostTextInput}
                      postTextInput={postTextInput}
                      userId={userId}
                      comment={a}
                      i={i}
                    />
                  );
                })}
              </div>
              <form
                onSubmit={e => {
                  let copy = [...postTextInput];
                  copy.unshift(textInput);
                  setPostTextInput(copy);
                  e.target.reset();
                  e.preventDefault();
                }}
                className="feeds_comment"
              >
                <textarea
                  onChange={eventInput}
                  placeholder="댓글 달기..."
                  autoComplete="off"
                  autoCorrect="off"
                  row="1"
                />
                <button className="comment_post">게시</button>
              </form>
            </div>
          </div>
          <div className="main-right">
            <div className="right-top">
              <div className="main_profile_name right_profile_name">
                <img
                  className="right_profile_img"
                  src="/images/gwanghyunBaek/me1.jpeg"
                  alt=""
                />
                <div className="right_profile_id">
                  <span className="first_id">bbbb_0221</span>
                  <span className="second_id">bbb_0221</span>
                </div>
              </div>
            </div>
            <div className="right-middle1">
              <div className="story">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="story_profile">
                <img
                  className="story_img1"
                  src="/images/gwanghyunBaek/hayeon1.jpeg"
                  alt=""
                />
                <div className="story_name1">
                  <span>hayeon</span>
                  <span>2시간 전</span>
                </div>
              </div>
              <div className="story_profile">
                <img
                  className="story_img1"
                  src="/images/gwanghyunBaek/hayeon2.jpeg"
                  alt=""
                />
                <div className="story_name1">
                  <span>hayeon</span>
                  <span>1시간 전</span>
                </div>
              </div>
              <div className="story_profile">
                <img
                  className="story_img1"
                  src="/images/gwanghyunBaek/hayeon3.jpeg"
                  alt=""
                />
                <div className="story_name1">
                  <span>hayeon</span>
                  <span>30분 전</span>
                </div>
              </div>
              <div className="story_profile">
                <img
                  className="story_img1"
                  src="/images/gwanghyunBaek/hayeon4.jpeg"
                  alt=""
                />
                <div className="story_name1">
                  <span>hayeon</span>
                  <span>10분 전</span>
                </div>
              </div>
              <div className="story_profile">
                <img
                  className="story_img1"
                  src="/images/gwanghyunBaek/hayeon1.jpeg"
                  alt=""
                />
                <div className="story_name1">
                  <span>hayeon</span>
                  <span>2시간 전</span>
                </div>
              </div>
              <div className="story_profile">
                <img
                  className="story_img1"
                  src="/images/gwanghyunBaek/hayeon1.jpeg"
                  alt=""
                />
                <div className="story_name1">
                  <span>hayeon</span>
                  <span>2시간 전</span>
                </div>
              </div>
            </div>
            <div className="right-bottom">
              <div className="follow_top">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className="follow_bottom">
                <div className="story_follow">
                  <img
                    className="story_img_bottom"
                    src="/images/gwanghyunBaek/hayeon1.jpeg"
                    alt=""
                  />
                  <div className=" story_name_bottom">
                    <span>hayeon</span>
                    <span>회원님을 팔로우 합니다</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="follow_bottom">
                <div className="story_follow">
                  <img
                    className="story_img_bottom"
                    src="/images/gwanghyunBaek/hayeon2.jpeg"
                    alt=""
                  />
                  <div className=" story_name_bottom">
                    <span>hayeon</span>
                    <span>회원님을 팔로우 합니다</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="follow_bottom">
                <div className="story_follow">
                  <img
                    className="story_img_bottom"
                    src="/images/gwanghyunBaek/hayeon3.jpeg"
                    alt=""
                  />
                  <div className=" story_name_bottom">
                    <span>hayeon</span>
                    <span>회원님을 팔로우 합니다</span>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
            </div>
            <div className="right_footer">
              <div className="hyper">
                <a href="#">소개</a>
                <a href="#">도움말</a>
                <a href="#">홍보 센터</a>
                <a href="#">API</a>
                <a href="#">채용 정보</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">약관</a>
                <a href="#">위치</a>
                <a href="#">인기 계정</a>
                <a href="#">해시태그</a>
                <a href="#">언어</a>
              </div>
              <div className="instalink">
                <address>© 2022 INSTAGRAM FROM META</address>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

const AddComment = props => {
  const [heart, setHeart] = useState('./images/gwanghyunBaek/heart.png');
  const heartChange = () => {
    heart === './images/gwanghyunBaek/heart.png'
      ? setHeart('./images/gwanghyunBaek/heart1.png')
      : setHeart('./images/gwanghyunBaek/heart.png');
  };

  // const onRemove =

  return (
    <li className="post_li" key={props.i}>
      <div className="post_left">
        <span className="post_id">{props.userId}</span>
        <span className="post_add_comment">{props.comment}</span>
      </div>
      <div className="post_right">
        <img onClick={heartChange} className="post_heart" src={heart} alt="" />
        <button
          onClick={() => {
            let copy = [...props.postTextInput];
            copy.splice(props.i, 1);
            props.setPostTextInput(copy);
          }}
          className="post_btn"
        >
          x
        </button>
      </div>
    </li>
  );
};

export default Main;
