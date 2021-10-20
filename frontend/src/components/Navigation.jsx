import React from 'react';
import '../index.css';
import logo from '../assets/pic/Logo.png';
import callLogo from '../assets/pic/BG.png';
import callLogoCall from '../assets/icon/Call.png';
import line from '../assets/pic/Line.png';

const Navigation = () => {
  return (
    <>
      <div className='wrapper'>
        <nav>
          <img src={logo} alt='logo' className='logo' />
          <ul className='navbar-right'>
            <li>
              <a href='/' className='body2'>
                Home
              </a>
            </li>
            <li>
              <a href='/' className='body2'>
                About us
              </a>
            </li>
            <li>
              <a href='/' className='body2'>
                Services
              </a>
            </li>
            <li>
              <a href='/' className='body2'>
                Blog
              </a>
            </li>
            <li>
              <a href='/' className='body2'>
                Contact
              </a>
            </li>
          </ul>
          <img src={line} alt='line' className='line' />
          <div className='assistance'>
            <img src={callLogo} alt='call' className='call' />{' '}
            <img src={callLogoCall} alt='callCall' className='callIcon' />
            <u>Road Assistance</u>
            <a href='/call' className='number'>
              180026525452
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
