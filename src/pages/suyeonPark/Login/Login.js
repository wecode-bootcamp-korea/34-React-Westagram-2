import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const response = 'SUCCESS';
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const goToMain = () => {
    if (response === 'SUCCESS') {
      alert('환영합니다:)');
      navigate('/main-yeon');
    } else {
      alert('돌아가주세요:(');
    }
  };
  //최상위 class name을 컴포넌트 이름과 동일하게 해주면 스타일링 겹침을 줄일 수 있다.

  function handleIdInput(event) {
    setId(event.target.value);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
  }

  return (
    <div class="login">
      <div class="container">
        <div class="borderOutline">
          <h1>Westagram</h1>
          <form>
            <input
              id="userName"
              class="loginInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
            <input
              id="pw"
              class="loginInput"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <button id="logInBtn" type="button" onClick={goToMain}>
              로그인
            </button>
            {/*버튼 타입을 꼭 지정해줄 것 */}
          </form>
          <footer>
            <a href="">비밀번호를 잊으셨나요?</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
