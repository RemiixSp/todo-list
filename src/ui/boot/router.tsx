import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorization from '../pages/authorization';
import Home from '../pages/home';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authorization' element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
