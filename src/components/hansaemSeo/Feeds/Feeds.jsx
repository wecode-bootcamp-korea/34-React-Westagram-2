import React from 'react';
import './Feeds.scss';
import Feed from '../Feed/Feed';

const Feeds = ({ feeds }) => {
  return (
    <div className="feeds">
      {feeds.map((feed) => {
        return <Feed key={feed.feedId} feed={feed} />;
      })}
    </div>
  );
};
export default Feeds;
