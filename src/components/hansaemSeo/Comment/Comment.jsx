import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './Comment.scss';
const Comment = ({
  comment,
  comment: { userName, userComment, isAbleLike = true, isAbleDelete = true },
  onDeleteComment,
}) => {
  const handleDeleteComment = () => {
    onDeleteComment(comment.id);
  };
  return (
    <li className="comment">
      <span className="userName">{userName}</span>
      <span className="userComment">{userComment}</span>
      {isAbleLike ? (
        <FontAwesomeIcon className="commentLike" icon={faHeart} />
      ) : null}
      {isAbleDelete ? (
        <FontAwesomeIcon
          className="commentDelete"
          icon={faX}
          onClick={handleDeleteComment}
        />
      ) : null}
    </li>
  );
};

export default Comment;
