import React, { useEffect, useState } from 'react';

const Stories = props => {
  const [storiesData, setStoriesData] = useState([]);
  useEffect(() => {
    fetch('data/storiesData.json')
      .then(res => res.json())
      .then(data => {
        setStoriesData(data);
      });
  }, []);
  return (
    <>
      {storiesData.map((el, i) => {
        return (
          <div className="stories" key={el.id}>
            <div className="storiesImg">
              <img src={el.img} alt="" />
            </div>
            <div className="storiesName">
              <div className="storiesNameId">{el.username}</div>
              <div className="storiesNameInfo">{el.time}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stories;
