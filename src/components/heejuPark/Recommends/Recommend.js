import React, { useEffect, useState } from 'react';

const Recommends = () => {
  const [recommendsData, setRecommendsData] = useState([]);
  useEffect(() => {
    fetch('data/recommendsData.json')
      .then(res => res.json())
      .then(data => {
        setRecommendsData(data);
      });
  }, []);
  return (
    <>
      {recommendsData.map((el, i) => {
        return (
          <div className="recommends" key={el.id}>
            <div className="wrapper">
              <div className="img">
                <img src={el.img} alt="" />
              </div>
              <div className="recommendsName">
                <div className="recommendsNameId">{el.username}</div>
                <div className="recommendsNameInfo">{el.explain}</div>
              </div>
            </div>
            <div className="followBtn">
              <button>팔로우</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Recommends;
