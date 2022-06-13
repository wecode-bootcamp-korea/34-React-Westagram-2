import React from 'react';
import { Link } from 'react-router-dom';
import './rightStories.scss';

const RightStories = props => {
  return (
    <div className="rightStories">
      <div className="storiesTab">
        <div className="tabName">스토리</div>
        <div className="tabMore">
          <Link to="#">모두 보기</Link>
        </div>
      </div>
      <div className="otherStories">
        <div className="storiesFirst">
          <div className="firstImg">
            <img
              src="https://images.unsplash.com/photo-1606878323177-265211499dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </div>
          <div className="firstName">
            <div className="nameId">Alpha_bootcamp</div>
            <div className="nameInfo">16분 전</div>
          </div>
        </div>
        <div className="storiesSecond">
          <div className="secondImg">
            <img
              src="https://images.unsplash.com/photo-1642101566158-5c2d5dfed57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80"
              alt=""
            />
          </div>
          <div className="secondName">
            <div className="nameId">Bravo_bootcamp</div>
            <div className="nameInfo">3시간 전</div>
          </div>
        </div>
        <div className="storiesThird">
          <div className="thirdImg">
            <img
              src="https://images.unsplash.com/photo-1524009901480-a6fa1c0c8ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="thirdName">
            <div className="nameId">Charlie_bootcamp</div>
            <div className="nameInfo">20시간 전</div>
          </div>
        </div>
        <div className="storiesThird">
          <div className="thirdImg">
            <img
              src="https://images.unsplash.com/photo-1538603644737-89b694ec9214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
              alt=""
            />
          </div>
          <div className="thirdName">
            <div className="nameId">Delta_bootcamp</div>
            <div className="nameInfo">1시간 전</div>
          </div>
        </div>
        <div className="storiesThird">
          <div className="thirdImg">
            <img
              src="https://images.unsplash.com/photo-1501605623075-d5715e4637ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="thirdName">
            <div className="nameId">Echo_bootcamp</div>
            <div className="nameInfo">12시간 전</div>
          </div>
        </div>
        <div className="storiesThird">
          <div className="thirdImg">
            <img
              src="https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="thirdName">
            <div className="nameId">Foxtrot_bootcamp</div>
            <div className="nameInfo">15분 전</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightStories;
