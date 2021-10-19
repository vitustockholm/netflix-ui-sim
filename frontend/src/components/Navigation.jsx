import React from 'react';
import '../index.css';

const Navigation = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>finsweet</div>
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
        <div className='line'></div>
        <div className='call'></div>
        <p>Road Assistance</p>
        <a href='/call'>180026525452</a>
      </div>
    </>
  );
};

export default Navigation;
