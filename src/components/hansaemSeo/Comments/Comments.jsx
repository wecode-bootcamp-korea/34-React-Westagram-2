import React from 'react';
import Comment from '../Comment/Comment';

const Comments = ({ comments, onDeleteComment }) => {
  return (
    <ul className="comments">
      {comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </ul>
  );
};

export default Comments;
