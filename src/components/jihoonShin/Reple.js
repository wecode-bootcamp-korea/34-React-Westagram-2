import React from 'react';
import { useState } from 'react';

const Reple = props => {
  let [likeHeart, setLikeHeart] = useState('');

  return (
    <>
      <div className="contentsMessageBox" key={props.i}>
        <p>
          <span>Qmzmzejj</span> {props.reple[props.i]}
        </p>
        <div className="commentLikeBox">
          <i
            onClick={() => {
              likeHeart === 'fa-solid'
                ? setLikeHeart('')
                : setLikeHeart('fa-solid');
            }}
            className={`fa-regular fa-heart + ${likeHeart}`}
          />
          <p
            className="commentDeleteButton"
            onClick={() => {
              let newReple = [...props.reple];
              newReple.splice(props.i, 1);
              props.setReple(newReple);
            }}
          >
            X
          </p>
        </div>
      </div>
      <p className="gray">1시간 전</p>
    </>
  );
};

export default Reple;
