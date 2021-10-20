import React from 'react';

import '../../index.css';

// // -  assets
import imageBack from '../../assets/pic/bg1.png';
import ClockIcon from '../../assets/icon/Icon10.png';
import TwentyFourIcon from '../../assets/icon/24.png';
import StarsIcon from '../../assets/icon/Stars.png';
import ServiceIcon from '../../assets/backgrounds/BG1.png';

const HomeContext = () => {
  return (
    <>
      <div className=''>
        <header>
          <div className='header-text'>
            <h1>Get your vehicle service done online at one place</h1>
            <div className='primary header-button'>
              <p className='button-text'>Book servece</p>
            </div>
            <div className='home-header-clock-label'>
              <img src={ClockIcon} alt='' />
              <div className='helper-wrapper'>
                <p className='open-grey'>We are open</p>
                <p className='monday-dark'>
                  Monday to Friday 9:00 AM to 10:00 AM
                </p>
              </div>
            </div>
          </div>

          <div className='header-image'>
            <img src={ServiceIcon} alt='' className='serviceicon' />
            <img src={imageBack} alt='imageBack' />
            <div className='home-header__badge top-left'>
              <img src={TwentyFourIcon} alt='' />
              Quick service
            </div>
            <div className='home-header__badge bottom-right'>
              <div>
                <p className='u1 text-bold'>4.5/5</p>
                <p className='u2'>Rating</p>
              </div>
              <div className='star-row'>
                <img src={StarsIcon} alt='rating-stars-set' />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HomeContext;

////////////////////
// import React from 'react';
// //
// import Nav from './Navigation';
// import '../../index.css';
// // -  assets
// import imageBack from '../../assets/backgrounds/BG1.png';
// import ClockIcon from '../../assets/icon/Icon10.png';
// import TwentyFourIcon from '../../assets/icon/24.png';
// import StarsIcon from '../../assets/icon/Stars.png';
// import ServiceIcon from '../../assets/backgrounds/BG1.png';

// const Header = () => {
//   return (
//     <>
//       <div className='container'>
//         <Nav />{' '}
//         <header className=''>
//           <div className='header-text-wrapper'>
//             <h1>Get your vdsvsd done at one place</h1>
//             <div className='primary header-button'>
//               <p className='button-text'>Book servece</p>
//             </div>
//             <div className='home-header-clock-label'>
//               <img src={ClockIcon} alt='' />
//               <div className='helper-wrapper'>
//                 <p className='open-grey'>We are open</p>
//                 <p className='monday-dark'>
//                   Monday to Friday 9:00 AM to 10:00 AM
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className='header-image'>
//             <img src={ServiceIcon} alt='' className='serviceicon' />
//             <img src={imageBack} alt='imageBack' />
//             <div className='home-header__badge top-left'>
//               <img src={TwentyFourIcon} alt='' />
//               Quick service
//             </div>
//             <div className='home-header__badge bottom-right'>
//               <div>
//                 <p className='u1 text-bold'>4.5/5</p>
//                 <p className='u2'>Rating</p>
//               </div>
//               <div className='star-row'>
//                 <img src={StarsIcon} alt='rating-stars-set' />
//               </div>
//             </div>
//           </div>
//         </header>
//         <section>
//           <h1>Quate</h1>
//         </section>
//         <section>
//           <h1>Get Qoute</h1>
//         </section>
//         <section>offer</section>
//         <section>get in toucg</section>
//         <section>brands we serve</section>
//         <section>our customers</section>
//         <section>faq</section>
//         <footer>footer</footer>
//       </div>
//     </>
//   );
// };

// export default Header;

//////////////////////////////
