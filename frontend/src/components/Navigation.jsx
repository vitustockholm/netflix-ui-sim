import React from 'react';
import '../index.css';
import logo from '../assets/pic/Logo.png';
import callLogo from '../assets/pic/BG.png';
import callLogoCall from '../assets/icon/Call.png';
import line from '../assets/pic/Line.png';

const Navigation = () => {
  return (
    <>
      <div className='navbar '>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='navbar-right'>
          <a href='/' className='body2'>
            Home
          </a>
          <a href='/' className='body2'>
            About us
          </a>
          <a href='/' className='body2'>
            Services
          </a>
          <a href='/' className='body2'>
            Blog
          </a>
          <a href='/' className='body2'>
            Contact
          </a>
          <img src={line} alt='' />
          <img src={callLogo} alt='call' className='call' />{' '}
          <img src={callLogoCall} alt='callCall' className='callIcon' />
          <u>Road Assistance</u>
          <a href='/call'>180026525452</a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
