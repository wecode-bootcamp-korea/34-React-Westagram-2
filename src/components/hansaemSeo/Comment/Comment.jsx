import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './Comment.scss';
const Comment = ({
  comment: { userName, comment, isAbleLike = true, isAbleDelete = true },
}) => {
  return (
    <li className="comment">
      <span className="userName">{userName}</span>
      <span className="userComment">{comment}</span>
      {isAbleLike ? (
        <FontAwesomeIcon className="commentLike" icon={faHeart} />
      ) : null}
      {isAbleDelete ? (
        <FontAwesomeIcon className="commentDelete" icon={faX} />
      ) : null}
    </li>
  );
};

export default Comment;
