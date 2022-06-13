import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import './commentBox.scss';
import CommentLike from '../CommentLike/CommentLike';

const CommentBox = ({ names, onRemove }) => {
  return (
    <>
      {names.map(name => (
        <div key={name.id} className="commentLine">
          <span className="username">{name.username}</span>
          <p className="contents">{name.text}</p>
          <CommentLike />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete"
            onClick={() => onRemove(name.id)}
          />
        </div>
      ))}
    </>
  );
};

export default CommentBox;
