import React from 'react';
import { Link } from 'react-router-dom';
import Recommends from '../Recommends/Recommend';
import './rightRecommends.scss';

const RightRecommends = props => {
  return (
    <div className="rightRecommends">
      <div className="recommendsTab">
        <div className="tabName">회원님을 위한 추천</div>
        <div className="tabMore">
          <Link to="#">모두 보기</Link>
        </div>
      </div>
      <Recommends />
    </div>
  );
};
export default RightRecommends;
