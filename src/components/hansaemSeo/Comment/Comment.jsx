import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faX,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import './Comment.scss';
const Comment = ({
  comment,
  comment: { userName, userComment, isAbleLike = true, isAbleDelete = true },
  onDeleteComment,
}) => {
  const [like, setLike] = useState(false);

  const handleDeleteComment = () => {
    onDeleteComment(comment.id);
  };

  const hendleLikeClick = () => {
    setLike(oldLike => !oldLike);
  };
  return (
    <li className="comment">
      <span className="userName">{userName}</span>
      <span className="userComment">{userComment}</span>
      {isAbleLike ? (
        <FontAwesomeIcon
          className={`commentLike${like ? ' check' : ''}`}
          icon={like ? faHeartSolid : faHeartRegular}
          onClick={hendleLikeClick}
        />
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
