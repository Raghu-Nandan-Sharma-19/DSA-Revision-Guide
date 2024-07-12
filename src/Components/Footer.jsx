import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className='mt-4 md:mt-16 lg:mt-24 flex justify-center'>
        <img className="lg:w-1/4" src="./assets/logo.svg" alt="DSA Revision Logo" />
      </div>
      <div className='flex justify-center gap-5 mt-6 flex-row lg:gap-10'>
        <img className="lg:w-10 lg:h-10" src="./assets/icon-twitter.svg" alt="Twitter" />
        <img className="lg:w-10 lg:h-10" src="./assets/icon-youtube.svg" alt="YouTube" />
        <img className="lg:w-10 lg:h-10" src="./assets/icon-linkedin.svg" alt="LinkedIn" />
        <img className="lg:w-10 lg:h-10" src="./assets/icon-instagram.svg" alt="Instagram" />
      </div>
      <div className='flex justify-center mt-10 pb-14'>
        <p className="text-center lg:text-lg">2023 © DSA revision</p>
      </div>
    </div>
  );
}

export default Footer;
