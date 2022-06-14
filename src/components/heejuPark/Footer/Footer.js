import React from 'react';
import { Link } from 'react-router-dom';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';

const Footer = props => {
  return (
    <footer className="info">
      <Link to="#">Instagram 정보 ·</Link>
      <Link to="#">지원 ·</Link>
      <Link to="#">홍보센터 ·</Link>
      <Link to="#">API ·</Link>
      <Link to="#">채용 정보 ·</Link>
      <Link to="#">개인정보처리방침 ·</Link>
      <Link to="#">약관 ·</Link>
      <Link to="#">디렉터리 ·</Link>
      <Link to="#">프로필 ·</Link>
      <Link to="#">해시태그 ·</Link>
      <Link to="#">언어</Link>
      <p>
        <FontAwesomeIcon icon={faCopyright} />
        &nbsp;2019 INSTAGRAM
      </p>
    </footer>
  );
};

export default Footer;
