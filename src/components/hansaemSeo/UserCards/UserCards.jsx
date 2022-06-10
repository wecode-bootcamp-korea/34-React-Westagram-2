import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserCards.scss';
const UserCards = ({ userCards }) => {
  return (
    <>
      {userCards.map((userCard) => {
        return <UserCard key={userCard.userName} userCard={userCard} />;
      })}
    </>
  );
};

export default UserCards;
