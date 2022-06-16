import React from 'react';
import './comment.scss';

const Comment = ({ comment, name, key }) => {
  return (
    <div key={key} className="comment_box">
      <div className="post_left">
        <span className="post_id">{name} </span>
        <span className="post_add_comment">{comment}</span>
      </div>
      <div className="post_right">
        <img className="post_heart" />
        <button className="post_btn">x</button>
      </div>
    </div>
  );
};

export default Comment;
