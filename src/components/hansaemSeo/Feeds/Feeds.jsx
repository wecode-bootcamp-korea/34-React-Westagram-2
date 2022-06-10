import React from 'react';
import './Feeds.scss';
import Feed from '../Feed/Feed';

const Feeds = ({ feeds, onAddComment, onDeleteComment }) => {
  return (
    <div className="feeds">
      {feeds.map(feed => {
        return (
          <Feed
            key={feed.feedId}
            feed={feed}
            onAddComment={onAddComment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </div>
  );
};
export default Feeds;
