import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login = props => {
  const [loginAbled, setLoginAbled] = useState(true);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleChangeInfo = () => {
    if (id && password) {
      setLoginAbled(false);
    } else {
      setLoginAbled(true);
    }
  };
  const handleLogin = ev => {
    ev.preventDefault();

    if (!id.includes('@')) {
      alert('전화번호 또는 이메일 형식을 확인해주세요.');
      return;
    } else if (password.length < 3) {
      alert('비밀번호를 6자 이상 입력해주세요.');
      return;
    }

    fetch('http://10.58.0.27:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('access_token', result.access_token);

          navigate('/main-saem');
        } else {
          alert(result.message);
        }
      });
  };

  const handleIdInputChange = ev => {
    setId(ev.target.value);
  };

  const handlePasswordInputChange = ev => {
    setPassword(ev.target.value);
  };

  return (
    <div className="login">
      <main className="login-wrapper">
        <h1 className="login-title">Westagram</h1>
        <form
          className="login-form"
          onChange={handleChangeInfo}
          onSubmit={handleLogin}
        >
          <input
            className="login-input login-id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInputChange}
            required
            autoComplete="off"
          />
          <input
            className="login-input login-pw"
            placeholder="비밀번호"
            onChange={handlePasswordInputChange}
            required
            type="password"
            autoComplete="off"
          />
          <button className="login-button" disabled={loginAbled}>
            로그인
          </button>
        </form>
        <p className="login-help-text">비밀번호를 잊으셨나요?</p>
        <script src="./src/login.js" />
      </main>
    </div>
  );
};

export default Login;
