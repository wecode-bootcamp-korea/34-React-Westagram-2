import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './commentLike.scss';

// 댓글 좋아요 기능 구현
const CommentLike = () => {
  const [like, setLike] = useState(false);
  return (
    <FontAwesomeIcon
      icon={like === false ? regularHeart : solidHeart}
      className={`like${like === true ? ' check' : ''}`}
      onClick={() => {
        setLike(!like);
      }}
    />
  );
};

export default CommentLike;
