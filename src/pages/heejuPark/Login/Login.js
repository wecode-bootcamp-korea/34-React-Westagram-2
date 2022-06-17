import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './login.scss';

const Login = () => {
  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');
  const [loginInfo, setLoginInfo] = useState({ id: '', pw: '' });

  const saveLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // useEffect(() => {
  //   id.includes('@') && pw.length > 4 ? setActivate(false) : setActivate(true);
  // }, [id, pw]);

  const condition = !(
    loginInfo.id.includes('@') &&
    loginInfo.id.includes('.') &&
    loginInfo.pw.length > 4
  );

  // Main페이지로 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hee');
  };

  // 백엔드에 로그인 정보 전송
  const postLoginInfo = e => {
    e.preventDefault();
    fetch('http://10.58.0.118:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: loginInfo.id, password: loginInfo.pw }),
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('token', result.ACCESS_TOKEN);
        if (localStorage.getItem('token') === result.ACCESS_TOKEN) {
          goToMain();
        } else {
          alert('이메일과 비밀번호를 확인해주세요');
        }
      });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="title">Westagram</h1>
        <form className="infoWrapper" onSubmit={postLoginInfo}>
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="id"
            onChange={saveLoginInfo}
            required
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            name="pw"
            onChange={saveLoginInfo}
            required
          />
          <div className="btnWrapper">
            <button disabled={condition} className="loginBtn">
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
