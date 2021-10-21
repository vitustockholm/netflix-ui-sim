import React from 'react';
import HomeContext from '../components/main/HomeContext';
import CallToContext from '../components/main/CallToContext';
import ExperienceContext from '../components/main/ExperienceContext';
import OfferContext from '../components/main/OfferContext';
import QuoteContext from '../components/main/QuoteContext';
import Service from '../components/main/Service';
import ServiceContext from '../components/main/ServiceContext';

const HomePage = () => {
  return (
    <>
      <div className='container'>
        <HomeContext />
        <QuoteContext />
        <Service />
        <ServiceContext />
        <OfferContext />
        <CallToContext />
        <ExperienceContext />
      </div>
    </>
  );
};

export default HomePage;
