import React from 'react';
import '../../index.css';
import Logo from '../../assets/pic/Logo.png';

import callLogoCall from '../../assets/icon/Call.png';

const Navigation = () => {
  return (
    <>
      <header>
        <img src={Logo} alt='logo' className='logo' />
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__list-item'>
              <a href='/' className='nav__link'>
                Home
              </a>
            </li>
            <li className='nav__list-item'>
              <a href='/' className='nav__link'>
                About us
              </a>
            </li>
            <li className='nav__list-item'>
              <a href='/' className='nav__link'>
                Services
              </a>
            </li>
            <li className='nav__list-item'>
              <a href='/' className='nav__link'>
                Blog
              </a>
            </li>
            <li className='nav__list-item'>
              <a href='/' className='nav__link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* <img src={line} alt='line' className='linija' /> */}

        <div className='assistance'>
          <div className='assistance__icon'>
            <img src={callLogoCall} alt='callCall' className='callIcon logo' />
          </div>

          <span className='assistance__info'>Road Assistance</span>
          <span className='assistance__info'>
            <a href='/call' className='number'>
              180026525452
            </a>
          </span>
        </div>
      </header>
    </>
  );
};

export default Navigation;
