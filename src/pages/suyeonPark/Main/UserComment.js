import React, { useState, useEffect } from 'react';

//<ul>내부의 <li>태그 컴포넌트화

const UserComment = props => {
  const [mockCommentList, setMockCommentList] = useState([]);
  useEffect(() => {
    fetch('/data/userCommentData.json')
      .then(res => res.json())
      .then(data => {
        setMockCommentList(data);
      });
  }, []);

  return (
    <ul class="usercomment">
      {mockCommentList.map((comment, i) => {
        return (
          <li class="eachUserComment" key={comment.id}>
            <span>{comment.userName}</span>
            <p>{comment.content}</p>
            <button class="heart">
              <i class="fa-regular fa-heart" />
            </button>
            <button
              class="delete"
              onClick={() => {
                let copyList = [...mockCommentList];
                copyList.splice(i, 1);
                setMockCommentList(copyList);
              }}
            >
              <i class="fa-regular fa-trash-can" />
            </button>
          </li>
        );
      })}

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
