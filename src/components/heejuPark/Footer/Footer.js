import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';

const Footer = props => {
  const [footerInfo, setFooterInfo] = useState([]);
  useEffect(() => {
    fetch('data/footerData.json')
      .then(res => res.json())
      .then(data => {
        setFooterInfo(data);
      });
  }, []);
  return (
    <footer className="info">
      {footerInfo.map(el => {
        return (
          <Link to="#" key={el.id}>
            {el.text}
          </Link>
        );
      })}
      <p>
        <FontAwesomeIcon icon={faCopyright} />
        &nbsp;2019 INSTAGRAM
      </p>
    </footer>
  );
};

export default Footer;
