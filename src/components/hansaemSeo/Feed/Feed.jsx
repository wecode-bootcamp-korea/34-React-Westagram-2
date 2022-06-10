import React, { useState } from 'react';
import './Feed.scss';
import {
  faBookmark,
  faComment,
  faHeart,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserCard from '../UserCard/UserCard';
import Comments from '../Comments/Comments';

const Feed = ({
  feed,
  feed: { userInfo, feedImage, feedLikeMessage, feedLikeUserImage, comments },
  onAddComment,
  onDeleteComment,
}) => {
  const [comment, setComment] = useState('');
  const onCommentSubmit = ev => {
    ev.preventDefault();
    onAddComment(feed.feedId, comment);
    setComment('');
  };

  const handleChangeComment = ev => {
    setComment(ev.target.value);
  };

  const handleDeleteComment = commentId => {
    onDeleteComment(feed.feedId, commentId);
  };

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
      <Comments comments={comments} onDeleteComment={handleDeleteComment} />
      <p className="feed-time">42분 전</p>
      <form className="new-comment" onSubmit={onCommentSubmit}>
        <input
          className="comment-input"
          placeholder="댓글 달기..."
          value={comment}
          onChange={handleChangeComment}
        />
        <button className="comment-button" disabled={comment ? false : true}>
          게시
        </button>
      </form>
    </article>
  );
};

export default Feed;
