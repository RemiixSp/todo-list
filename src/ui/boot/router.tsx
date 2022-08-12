import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../core/store/store';
import Authorization from '../pages/authorization';
import Home from '../pages/home';
import NotSignedUp from '../pages/notSignUp';

const Router = () => {
  const isAuthorized = useAppSelector((state) => state.login.isAuthorized);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            isAuthorized ? <Home /> : <Navigate replace to={'/not-logged'} />
          }
        />
        <Route path='not-logged' element={<NotSignedUp />} />
        <Route
          path='/authorization'
          element={
            !isAuthorized ? <Authorization /> : <Navigate replace to={'/'} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
