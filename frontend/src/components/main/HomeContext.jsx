import React from 'react';
import logo from '../../assets/pic/Logo.png';
import '../../index.css';
import Header from '../../components/header/Header';

const HomeContext = () => {
  return (
    <div>
      <div className='wrapper'>
        {' '}
        <img src={logo} alt='logo' className='logo' />
      </div>
      <Header />
    </div>
  );
};

export default HomeContext;
