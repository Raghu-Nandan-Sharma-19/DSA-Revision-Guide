import React from 'react';

const Header = () => {
  return (
    <div className='flex fixed w-full top-0 justify-between md:justify-around px-4 py-4 bg-white shadow-md z-50'>
      <img src="./assets/logo.svg" alt="logo" className="h-8 md:h-12" />
      <div className='hidden md:flex bg-gray-200 text-center font-bold justify-around px-4 py-2 rounded-full w-1/2 h-12 gap-5'>
        <a href="#" className="hover:text-gray-600">Home</a>
        <a href="#" className="hover:text-gray-600">Pricing</a>
        <a href="#" className="hover:text-gray-600">Testimonials</a>
      </div>
      <a className='bg-green-950 text-white px-4 py-2 font-semibold text-base h-11 text-center rounded-3xl hover:bg-green-600' href="#">Join Community</a>
    </div>
  );
};

export default Header;
