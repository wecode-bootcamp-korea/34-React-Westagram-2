import React from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/reset.scss';
import { useState } from 'react';

const Login = () => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [abled, setAbled] = useState(true);
  const eventId = e => setId(e.target.value);
  const eventPw = e => setPw(e.target.value);

  const btnAbled = () => {
    (id.includes('@') && pw.length) > 4 ? setAbled(false) : setAbled(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <form className="insta">
        <header className="title">westagram</header>
        <input
          onKeyUp={btnAbled}
          className="userId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={eventId}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <h1>{id}</h1>
        <input
          onKeyUp={btnAbled}
          onChange={eventPw}
          className="userPw"
          type="password"
          placeholder="비밀번호"
        />{' '}
        <h1>{pw}</h1>
        <button
          className="login_btn"
          disabled={abled}
          onClick={() => {
            if (id.includes('@') && pw.length > 4) {
              navigate('/main');
            }
          }}
          type="button"
        >
          로그인
        </button>
        <a className="a_login" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </form>
    </>
  );
};

export default Login;
