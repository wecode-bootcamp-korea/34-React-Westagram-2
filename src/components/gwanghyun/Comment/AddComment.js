import React from 'react';
import { useState } from 'react';

const AddComment = ({
  setPostTextInput,
  postTextInput,
  userId,
  comment,
  i,
}) => {
  // const onRemove =
  const [heartImagePass, setHeartImagePass] = useState(
    './images/gwanghyunBaek/heart.png'
  );
  const heartPostChange = () => {
    heartImagePass === './images/gwanghyunBaek/heart.png'
      ? setHeartImagePass('./images/gwanghyunBaek/heart1.png')
      : setHeartImagePass('./images/gwanghyunBaek/heart.png');
  };

  return (
    <li className="post_li" key={i}>
      <div className="post_left">
        <span className="post_id">{userId}</span>
        <span className="post_add_comment">{comment}</span>
      </div>
      <div className="post_right">
        <img
          onClick={heartPostChange}
          className="post_heart"
          src={heartImagePass}
          alt=""
        />
        <button
          onClick={() => {
            let copy = [...postTextInput];
            copy.splice(i, 1);
            setPostTextInput(copy);
          }}
          className="post_btn"
        >
          x
        </button>
      </div>
    </li>
  );
};

export default AddComment;
