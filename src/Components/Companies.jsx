import React from 'react';

const Companies = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className="flex flex-wrap items-center justify-between py-4 mt-11 md:mt-24 lg:justify-center">
        <img className="w-1/2 md:w-auto lg:mx-10" src="./assets/adobe.svg" alt="adobe" />
        <img className="w-1/2 md:w-auto lg:mx-10 mt-4 md:mt-0" src="./assets/airbnb.svg" alt="airbnb" />
      </div>
      <div className="flex flex-wrap items-center justify-between py-1 lg:justify-center">
        <img className="w-1/2 md:w-auto lg:mx-10" src="./assets/figma.svg" alt="figma" />
        <img className="w-1/2 md:w-auto lg:mx-10 mt-4 md:mt-0" src="./assets/framer.svg" alt="framer" />
      </div>
      <div className="flex flex-wrap items-center justify-between py-2 lg:justify-center">
        <img className="w-1/2 md:w-auto lg:mx-10" src="./assets/google.svg" alt="google" />
        <img className="w-1/2 md:w-auto lg:mx-10 mt-4 md:mt-0" src="./assets/dropbox.svg" alt="dropbox" />
      </div>
    </div>
  );
};

export default Companies;
