import React from 'react';
import './comment.scss';

const Comment = ({ comment, name, key }) => {
  return (
    <div key={key} className="comment_box">
      <span className="comment_first_span">{name} </span>
      <span className="comment_second_span">{comment}</span>
    </div>
  );
};

export default Comment;
