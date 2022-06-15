import React, { useEffect, useState } from 'react';
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
    fetch('http://10.58.0.118:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: id, password: pw }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('result:', result);
        localStorage.setItem('token', result.ACCESS_TOKEN);
        if (localStorage.getItem('token') === result.ACCESS_TOKEN) {
          navigate('/main-hee');
        } else {
          alert('이메일과 비밀번호를 확인해주세요');
        }
      });
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
