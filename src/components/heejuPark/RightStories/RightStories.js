import React from 'react';
import { Link } from 'react-router-dom';
import Stories from '../Stories/Stories';
import './rightStories.scss';

const RightStories = props => {
  return (
    <div className="rightStories">
      <div className="storiesTab">
        <div className="tabName">스토리</div>
        <div className="tabMore">
          <Link to="#">모두 보기</Link>
        </div>
      </div>
      <div className="otherStories">
        <Stories />
      </div>
    </div>
  );
};

export default RightStories;
