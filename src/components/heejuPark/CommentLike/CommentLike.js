import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import './commentLike.scss';

// 댓글 좋아요 기능 구현
const CommentLike = () => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <FontAwesomeIcon
      icon={!like ? regularHeart : solidHeart}
      className={`like ${like ? 'check' : ''}`}
      onClick={toggleLike}
    />
  );
};

export default CommentLike;
