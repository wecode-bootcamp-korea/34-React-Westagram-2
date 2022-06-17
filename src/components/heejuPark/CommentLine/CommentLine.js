import React from 'react';
import CommentLike from '../CommentLike/CommentLike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import './commentLine.scss';

const CommentLine = ({ names, onRemove }) => {
  // const [inputText, setInputText] = useState(''); // 피드에서 다르게 작동하기 위해서 분리 필요 (현재는 한 곳에서만 스테이트값을 바라보기에 피드에 나타나는 댓글의 값이 같을 수 밖에 없음)
  return (
    <>
      {names.map(({ id, username, text }) => (
        <div key={id} className="commentLine">
          <span className="username">{username}</span>
          <p className="contents">{text}</p>
          <CommentLike />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete"
            onClick={() => onRemove(id)}
          />
        </div>
      ))}
    </>
    // <div key={id} className="commentLine">
    //   <span className="username">{username}</span>
    //   <p className="contents">{text}</p>
    //   <CommentLike />
    //   <FontAwesomeIcon
    //     icon={faTrashCan}
    //     className="delete"
    //     onClick={() => onRemove(id)}
    //   />
    // </div>
  );
};

export default CommentLine;
