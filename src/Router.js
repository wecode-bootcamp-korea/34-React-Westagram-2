import React from 'react';

import LoginHyun from './pages/gwanghyunBaek/Login/Login';
import MainHyun from './pages/gwanghyunBaek/Main/Main';

import LoginSaem from './pages/hansaemSeo/Login/Login';
import MainSaem from './pages/hansaemSeo/Main/Main';

import LoginHee from './pages/heejuPark/Login/Login';
import MainHee from './pages/heejuPark/Main/Main';

import LoginHoon from './pages/jihoonShin/Login/Login';
import MainHoon from './pages/jihoonShin/Main/Main';

import LoginYeon from './pages/suyeonPark/Login/Login';
import MainYeon from './pages/suyeonPark/Main/Main';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutePage from './pages/RoutePage/RoutePage';
const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutePage />} />
        <Route path="/login-hyun" element={<LoginHyun />} />
        <Route path="/main-hyun" element={<MainHyun />} />
        <Route path="/login-saem" element={<LoginSaem />} />
        <Route path="/main-saem" element={<MainSaem />} />
        <Route path="/login-hee" element={<LoginHee />} />
        <Route path="/main-hee" element={<MainHee />} />
        <Route path="/login-hoon" element={<LoginHoon />} />
        <Route path="/main-hoon" element={<MainHoon />} />
        <Route path="/login-yeon" element={<LoginYeon />} />
        <Route path="/main-yeon" element={<MainYeon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
