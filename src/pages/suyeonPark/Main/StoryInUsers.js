import React, { useState, useEffect } from 'react';

const StoryInUsers = () => {
  const [mockStoryInUsersList, setMockStoryInUsersList] = useState([]);
  useEffect(() => {
    fetch('/data/storyInUsersData.json')
      .then(response => response.json())
      .then(data => {
        setMockStoryInUsersList(data);
      });
  }, []);

  return (
    <ul class="storyInUsers">
      {mockStoryInUsersList.map(data => (
        <li key={data.id}>
          <img alt="story user pictures" src={data.userImageSource} />
          <div class="allListInDiv">
            <span class="mainRightUserId">{data.userName}</span>
            <span class="mainRightGrayText">{data.time}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryInUsers;
