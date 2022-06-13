import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../../styles/common.scss';
import './login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [activate, setActivate] = useState(false);

  useEffect(() => {
    id.includes('@') && pw.length > 4 ? setActivate(false) : setActivate(true);
  }, [id, pw]);

  // Main페이지로 이동
  const navigate = useNavigate();
  const goToMain = e => {
    e.preventDefault();
    if (id !== pw) return;
    if (id.length > 0 && pw.length > 0 && id === pw) {
      // console.log("enter");
      navigate('/main-hee');
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="title">Westagram</h1>
        <form className="infoWrapper" onSubmit={goToMain}>
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={e => {
              setId(e.target.value);
            }}
            required
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              setPw(e.target.value);
            }}
            required
          />
          <div className="btnWrapper">
            <button disabled={activate} className="loginBtn">
              로그인
            </button>
          </div>
        </form>
        <div className="pwSearch">
          <Link to="/">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
