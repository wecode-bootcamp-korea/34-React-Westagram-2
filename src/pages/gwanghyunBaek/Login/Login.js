import React from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/reset.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [disabled, setDisabled] = useState(true);
  const eventId = e => setId(e.target.value);
  const eventPw = e => setPw(e.target.value);

  const btnAbled = () => {
    id.includes('@') && pw.length > 4 ? setDisabled(false) : setDisabled(true);
  };
  useEffect(() => {
    btnAbled();
  }, [id, pw]);
  const navigate = useNavigate();

  return (
    <form className="insta" onSubmit={() => {}}>
      <header className="title">westagram</header>
      <input
        onKeyUp={btnAbled}
        className="userId"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={eventId}
        type="text"
      />
      <input
        onKeyUp={btnAbled}
        onChange={eventPw}
        className="userPw"
        type="password"
        placeholder="비밀번호"
      />{' '}
      <button
        className="login_btn"
        disabled={disabled}
        onClick={e => {
          if (id.includes('@') && pw.length > 4) {
            navigate('/main-hyun');
          }
        }}
      >
        로그인
      </button>
      <a className="a_login" href="#">
        비밀번호를 잊으셨나요?
      </a>
    </form>
  );
};

export default Login;
