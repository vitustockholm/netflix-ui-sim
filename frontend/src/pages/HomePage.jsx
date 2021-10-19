import React from 'react';
//
import Nav from '../components/Navigation';
import '../index.css';

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className='header'>
        <div className='header-text'>
          <h1> Get Your vechicle service done online at one place</h1>

          <button className='button button-text primary'>Book a service</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
