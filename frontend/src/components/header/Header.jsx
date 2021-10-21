import React from 'react';
//
import Nav from './Navigation';
import '../../index.css';

import Logo from '../../assets/pic/Logo.png';

const Header = () => {
  return (
    <>
      <div className='container100'>
        <div className='logo'>
          <img src={Logo} alt='logo' className='' />
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;
