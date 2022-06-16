import React from 'react';
import { useState, useEffect } from 'react';
import Comment from './Comment';

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  });

  return (
    <div className="commentList">
      <ul>
        {commentList.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
