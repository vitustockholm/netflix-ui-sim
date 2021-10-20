import React from 'react';
import logo from '../assets/pic/Logo.png';
import '../index.css';

const HomeContext = () => {
  return (
    <div>
      <div className='wrapper'>
        {' '}
        <img src={logo} alt='logo' className='logo' />
      </div>
    </div>
  );
};

export default HomeContext;
