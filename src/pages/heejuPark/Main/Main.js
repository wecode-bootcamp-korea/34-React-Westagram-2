import React from 'react';
import Feeds from '../../../components/heejuPark/Feeds/Feeds';
import RightStories from '../../../components/heejuPark/RightStories/RightStories';
import RightRecommends from '../../../components/heejuPark/RightRecommends/RightRecommends';
import Nav from '../../../components/heejuPark/Nav/Nav';
import Footer from '../../../components/heejuPark/Footer/Footer';
import './main.scss';
import '../../../styles/common.scss';

const Main = props => {
  return (
    <div className="main">
      <Nav />
      <main className="mainPage">
        <Feeds />
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
