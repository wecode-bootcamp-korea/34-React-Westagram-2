// import React from 'react';

// import '../../../pages/gwanghyunBaek/Main/main.scss';
// const Feeds = ({
//   textInput,
//   postTextInput,
//   setPostTextInput,
//   userId,
//   eventInput,
//   CommentList,
//   heart,
//   heartChange,
// }) => {
//   return (
//     <div className="feeds">
//       <div className="article">
//         <div className="main_post">
//           <div className="main_profile">
//             <div className="main_profile_name">
//               <img
//                 className="main_profile_img"
//                 src="/images/gwanghyunBaek/me1.jpeg"
//                 alt=""
//               />
//               <div className="main_profile_id">
//                 <span className="first_id">bbbb_0221</span>
//                 <span className="second_id">bbb_0221</span>
//               </div>
//             </div>
//             <span>
//               <FontAwesomeIcon
//                 icon={faEllipsis}
//                 className="faEllipsis"
//                 heartChange={heartChange}
//               />
//             </span>
//           </div>
//         </div>
//         <div className="main_img">
//           <img className="big_me" src="/images/gwanghyunBaek/me2.jpeg" alt="" />
//         </div>
//         <div className="main_feeds">
//           <div className="feeds_option">
//             <img src={heart} className="up_heart" onClick={heartChange} />
//             <svg
//               aria-label="댓글 달기"
//               className="_8-yf5 "
//               color="#262626"
//               fill="#262626"
//               height="24"
//               role="img"
//               viewBox="0 0 24 24"
//               width="24"
//             >
//               <path
//                 d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//               />
//             </svg>
//             <svg
//               aria-label="게시물 공유"
//               className="_8-yf5 "
//               color="#262626"
//               fill="#262626"
//               height="24"
//               role="img"
//               viewBox="0 0 24 24"
//               width="24"
//             >
//               <line
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 x1="22"
//                 x2="9.218"
//                 y1="3"
//                 y2="10.083"
//               />
//               <polygon
//                 fill="none"
//                 points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
//                 stroke="currentColor"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//               />
//             </svg>
//           </div>
//           <FontAwesomeIcon icon={faBookmark} className="bookmark" />
//         </div>
//         <div className="like_up">
//           <img
//             className="like_man"
//             src="/images/gwanghyunBaek/pic4.avif"
//             alt=""
//           />
//           <span>bbbb_0221님 외 4명이 좋아합니다.</span>
//         </div>
//         <div className="feeds_post">
//           <span>bbbb_0221</span>
//           <span>아 너어 무 우 잘 돼 ㅡㅡ </span>
//           <span className="after_view"> 더 보기</span>
//           <div className="hour_ago">
//             <span>1시간 전</span>
//           </div>

//           <CommentList />

//           {postTextInput.map((comment, index) => {
//             return (
//               <AddComment
//                 setPostTextInput={setPostTextInput}
//                 postTextInput={postTextInput}
//                 userId={userId}
//                 comment={comment}
//                 i={index}
//               />
//             );
//           })}
//         </div>
//         <form
//           onSubmit={e => {
//             let copy = [...postTextInput];
//             copy.unshift(textInput);
//             setPostTextInput(copy);
//             e.target.reset();
//             e.preventDefault();
//           }}
//           className="feeds_comment"
//         >
//           <input onChange={eventInput} placeholder="댓글 달기..." type="text" />
//           <button className="comment_post">게시</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Feeds;
