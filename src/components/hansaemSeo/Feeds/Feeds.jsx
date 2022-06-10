import React from 'react';
import './Feeds.scss';
import Feed from '../Feed/Feed';

const Feeds = ({ feeds, onAddComment }) => {
  return (
    <div className="feeds">
      {feeds.map(feed => {
        return (
          <Feed key={feed.feedId} feed={feed} onAddComment={onAddComment} />
        );
      })}
    </div>
  );
};
export default Feeds;
