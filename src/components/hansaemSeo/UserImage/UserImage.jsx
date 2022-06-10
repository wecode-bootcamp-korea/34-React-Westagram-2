import React from 'react';

const UserImage = ({ imageSize, userImage, isPinkRound }) => {
  const userImageSize =
    imageSize === 'normal' ? 'user-icon' : 'user-icon-small';

  return (
    <img
      className={`${userImageSize}${!isPinkRound ? '' : ' pink-round'}`}
      src={userImage}
      alt="feed"
    />
  );
};

export default UserImage;
