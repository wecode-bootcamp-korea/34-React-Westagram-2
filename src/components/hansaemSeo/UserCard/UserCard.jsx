import React from 'react';
import './UserCard.scss';
const UserCard = ({
  userCard: {
    userImage,
    imageSize,
    userName,
    userSubDescription,
    isPinkRound = false,
    isAbleFollow = false,
  },
}) => {
  const userImageSize =
    imageSize === 'normal' ? 'user-icon' : 'user-icon-small';
  return (
    <div className="userCard">
      <img
        className={`${userImageSize}${!isPinkRound ? '' : ' pink-round'}`}
        src={userImage}
        alt="feed"
      />
      <div className="wrapper-user-name">
        <p className="user-name">{userName}</p>
        {userSubDescription ? (
          <p className="sub-user-name">{userSubDescription}</p>
        ) : null}
      </div>
      {isAbleFollow ? <span className="recommand-follow">팔로우</span> : null}
    </div>
  );
};

export default UserCard;
