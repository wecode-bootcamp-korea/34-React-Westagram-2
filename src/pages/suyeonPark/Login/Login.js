import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [colorAbled, setColorAbled] = useState('#b2dffc');
  const [disabled, setDisabled] = useState('disabled');

  const goToMain = () => {
    navigate('/main-yeon');
  };
  //최상위 class name을 컴포넌트 이름과 동일하게 해주면 스타일링 겹침을 줄일 수 있다.

  function handleIdInput(event) {
    setId(event.target.value);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
  }

  const buttonColorChange = () => {
    if (id.includes('@') && pw.length >= 5) {
      setColorAbled('#0195f7');
      setDisabled('');
    } else {
      setColorAbled('#b2dffc');
      setDisabled('disabled');
    }
  };

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
              onKeyUp={buttonColorChange}
            />
            <input
              id="pw"
              class="loginInput"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
              onKeyUp={buttonColorChange}
            />
            <button
              id="logInBtn"
              type="subimit" //타입을 submit으로 지정해주면 엔터가 먹힘
              onClick={goToMain}
              style={{ backgroundColor: colorAbled }}
              disabled={disabled}
            >
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
