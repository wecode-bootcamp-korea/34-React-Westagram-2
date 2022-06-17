import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentLine from '../CommentLine/CommentLine';
import FeedsLike from '../FeedsLike/FeedsLike';
import { faBookmark, faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feeds = ({ names, onRemove, inputText, onChange, onClick, activate }) => {
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    fetch('data/feedsData.json')
      .then(res => res.json())
      .then(data => {
        setFeedsData(data);
      });
  }, []);

  return (
    <div>
      {feedsData.map(
        ({ id, feedimg, likesimg, likestext, feedtext, posttime }) => {
          return (
            <section className="feeds" key={id}>
              <article className="feedsContents">
                <header className="account">
                  <div className="miniPhoto">
                    <img src="/images/heejuPark/618A000834.jpg" alt="profile" />
                  </div>
                  <span className="name">hjpark625</span>
                  <span className="moreBtn">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </span>
                </header>
                <div className="feedsImg">
                  <img src={feedimg} alt="" />
                </div>
                <div className="iconsBundle">
                  <div className="iconsWrapper">
                    <FeedsLike />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </div>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className="explanation">
                  <div className="whoLikes">
                    <img src={likesimg} alt="profile" />
                    <span className="likesText">{likestext}</span>
                  </div>
                  <div className="expContents">
                    <div className="comment">
                      <b>hjpark625</b> {feedtext}
                      <span className="moreContents">
                        <Link to="#">더 보기</Link>
                      </span>
                    </div>
                    <div className="postTime">{posttime}</div>
                    <CommentLine names={names} onRemove={onRemove} />
                    {/* {names.map(({ id, username, text, onRemove }) => {
                      return (
                        <CommentLine
                          key={id}
                          username={username}
                          text={text}
                          onRemove={onRemove}
                        />
                      );
                    })} */}
                  </div>
                </div>
                <form className="commentBox">
                  <input
                    className="mainCommentBox"
                    type="text"
                    placeholder="댓글 달기..."
                    value={inputText}
                    onChange={onChange}
                  />
                  <button
                    className="mainCommentBtn"
                    onClick={onClick}
                    disabled={activate}
                  >
                    게시
                  </button>
                </form>
              </article>
            </section>
          );
        }
      )}
    </div>
  );
};

export default Feeds;
