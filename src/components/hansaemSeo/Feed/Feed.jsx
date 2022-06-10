import React from 'react';
import './Feed.scss';
import {
  faBookmark,
  faComment,
  faHeart,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserCard from '../UserCard/UserCard';

const Feed = ({
  feed: { userInfo, feedImage, feedLikeMessage, feedLikeUserImage },
}) => {
  return (
    <article className="feed">
      <div className="feed-user-wrapper">
        <UserCard userCard={userInfo} />
        <FontAwesomeIcon className="user-ellipsis" icon={faEllipsis} />
      </div>
      <img className="feed-image" src={feedImage} alt="feed" />
      <div className="feed-action-menus">
        <FontAwesomeIcon
          className="feed-like feed-action-menu"
          icon={faHeart}
        />
        <FontAwesomeIcon className="feed-action-menu" icon={faComment} />
        <FontAwesomeIcon
          className="feed-action-menu"
          icon={faShareFromSquare}
        />
        <FontAwesomeIcon className="feed-action-menu" icon={faBookmark} />
      </div>
      <div className="feed-like-message-wrapper">
        <img className="user-icon-xsmall" src={feedLikeUserImage} alt="" />
        <span className="like-message">{feedLikeMessage}</span>
      </div>
      <ul className="feed-comments">
        <li className="comment-my">
          <span className="feed-user-name">kor-sams-dev</span>
          <span className="feed-user-comment">
            반짝반짝 자근별 아름답게 떠있네
          </span>
        </li>
        <li className="comment-another">
          <span className="feed-user-name">neceosecuss</span>
          <span className="feed-user-comment">이뿐 별이 보임니당</span>
          <FontAwesomeIcon className="feed-comment-like" icon={faHeart} />
          <FontAwesomeIcon className="feed-comment-delete" icon={faX} />
        </li>
      </ul>
      <p className="feed-time">42분 전</p>
      <form className="new-comment">
        <input className="comment-input" placeholder="댓글 달기..." />
        <button className="comment-button" disabled>
          게시
        </button>
      </form>
    </article>
  );
};

export default Feed;
