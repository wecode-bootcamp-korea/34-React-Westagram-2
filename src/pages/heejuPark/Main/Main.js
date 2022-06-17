import React, { useEffect, useState } from 'react';
import Feeds from '../../../components/heejuPark/Feeds/Feeds';
import RightStories from '../../../components/heejuPark/RightStories/RightStories';
import RightRecommends from '../../../components/heejuPark/RightRecommends/RightRecommends';
import Nav from '../../../components/heejuPark/Nav/Nav';
import Footer from '../../../components/heejuPark/Footer/Footer';
import './main.scss';
import '../../../styles/common.scss';

const Main = () => {
  // 댓글 기능에 필요한 state값
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch('data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, []);
  const [names, setNames] = useState(commentData);
  const [inputText, setInputText] = useState(''); // 피드에서 다르게 작동하기 위해서 분리 필요 (현재는 한 곳에서만 스테이트값을 바라보기에 피드에 나타나는 댓글의 값이 같을 수 밖에 없음)
  const [nextId, setNextId] = useState(2);

  // 댓글 게시 버튼 활성화 및 비활성화에 필요한 state값
  const [activate, setActivate] = useState(false);
  // 댓글 게시 버튼 활성화 및 비활성화 조건
  useEffect(() => {
    // inputText.length === 0 ? setActivate(true) : setActivate(false);
    setActivate(inputText.length === 0);
  }, [inputText]);

  // 댓글 기능구현
  const onChange = e => {
    setInputText(e.target.value);
  };
  const onClick = e => {
    e.preventDefault();
    const nextNames = names.concat({
      id: nextId,
      username: 'hjpark625',
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames); // names의 값 업데이트
    setInputText(''); // 댓글 종료 후 초기화
  };

  // 댓글 삭제기능 구현
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  return (
    <div className="main">
      <Nav />
      <main className="mainPage">
        <Feeds
          names={names}
          onChange={onChange}
          onClick={onClick}
          onRemove={onRemove}
          activate={activate}
          inputText={inputText}
        />
        <section className="mainRight">
          <div className="rightProfile">
            <div className="rightImg">
              <img
                src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="rightName">
              <div className="nameId">Lego_bootcamp</div>
              <div className="nameInfo">Lego | 레고</div>
            </div>
          </div>
          <RightStories />
          <RightRecommends />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Main;
