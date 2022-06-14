import React from 'react';

//<ul>내부의 <li>태그 컴포넌트화

const UserComment = props => {
  return (
    <ul class="usercomment">
      {props.replyList.map((reply, i) => (
        <li class="eachUserComment" key={i}>
          <span>_sooyuni</span>
          <p>{reply}</p>
          <button class="heart">
            <i class="fa-regular fa-heart" />
          </button>
          <button
            class="delete"
            onClick={() => {
              let copy = [...props.replyList];
              copy.splice(i, 1);
              props.setReplyList(copy);
            }}
          >
            <i class="fa-regular fa-trash-can" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserComment;
