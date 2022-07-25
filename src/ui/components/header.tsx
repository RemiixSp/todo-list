import React from 'react';
import logo from '../../media/images/logo.png';
const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img src={logo} alt='todo Logo' />
          <div>
            <h1>To-do app</h1>
            <p>the best for controlling your time</p>
          </div>
        </div>
        <div className='header__authorization'>
          <button className='header__login'>Login</button>
          <button className='header__sign-up'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
