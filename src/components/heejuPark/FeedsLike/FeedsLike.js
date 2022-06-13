import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import './feedsLike.scss';

// 피드 게시물에 위치한 좋아요 기능 구현
const FeedsLike = () => {
  const [feedsLike, setFeedsLike] = useState(false);
  return (
    <FontAwesomeIcon
      icon={feedsLike === false ? regularHeart : solidHeart}
      className={`feedsLike${feedsLike === true ? ' check' : ''}`}
      onClick={() => {
        setFeedsLike(!feedsLike);
      }}
    />
  );
};

export default FeedsLike;
