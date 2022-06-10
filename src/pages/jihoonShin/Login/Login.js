/* eslint-disable */

import React from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  let [inputId, setInputId] = useState('');
  let [inputPw, setInputPw] = useState('');

  let [btnOnoff, setBtnOnoff] = useState(false);


  function inputIdPw() {
    {
    (inputId.indexOf('@') !== -1) && (inputPw.length >= 5) 
      ? setBtnOnoff(true) 
      : setBtnOnoff(false)
    }
  }


  
  const navigate = useNavigate();
  const btnGoMain = () => {
    (btnOnoff === true)
    ? navigate('/main-hoon')
    : alert('전송안됨')
  };

  return (
    <article className="Login">
      <LoginBox
        btnGoMain={btnGoMain}
        btnOnoff={btnOnoff}
        setBtnOnoff={setBtnOnoff}
        inputId={inputId}
        setInputId={setInputId}
        inputPw={inputPw}
        setInputPw={setInputPw}
        inputIdPw={inputIdPw}
      />
    </article>
  );
};

const LoginBox = props => {
  return (
    <div className="containerLogin">
      <div className="main">
        <h1 className="mainLogo">Instagram</h1>
        <div className="mainInput">
          <input
            className="inputId"
            type="text"
            placeholder=" 전화번호, 사용자 이름 또는 이메일"
            onKeyUp={props.inputIdPw}
            onChange={(e) => {
              props.setInputId(e.target.value)
            }}
          />
          <input
            className="inputPassword"
            type="password"
            placeholder=" 비밀번호"
            onKeyUp={props.inputIdPw}
            onChange={(e) => {
              props.setInputPw(e.target.value)
            }}
          />
        </div>
        <button
          className={props.btnOnoff ? 'mainBtnOn' : 'mainBtnoff'}
          onClick={props.btnGoMain}
        >
          로그인
        </button>
      </div>
      <div className="passwordFind">
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};
export default Login;
