import React from 'react';

const Pricing = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col px-2 justify-center mt-16 lg:items-center">
        <h1 className="font-bold md:mt-8 md:text-4xl text-3xl text-center lg:text-5xl">
          SIMPLE NO-TRICKS PRICING
        </h1>
        <p className="text-center font-semibold md:text-xl text-gray-600 mt-5 lg:text-2xl">
          Everything you need to grow 10x for less than a coffee.
        </p>
      </div>
      <div className="mt-10 md:mt-16 rounded-3xl px-5 border-2 border-black lg:max-w-3xl lg:mx-auto lg:border-2 lg:p-10">
        <h1 className="text-center text-black font-extrabold md:mr-64 md:text-2xl font-lato text-xl lg:text-3xl lg:mr-0">
          Premium Elite Subscription
        </h1>
        <p className="font-bold text-gray-400 mt-5 md:px-32 md:text-xl text-center lg:text-2xl lg:px-10">
          Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.
        </p>
      </div>
      <div className="mt-9 flex flex-col rounded-3xl px-6 border-2 border-black md:items-center lg:max-w-3xl lg:mx-auto lg:border-2 lg:p-10">
        <h1 className="px-3 font-bold text-green-600 md:px-32 md:text-xl font-serif lg:text-2xl">
          What's included
        </h1>
        <div className="flex flex-row ml-4 lg:ml-0 lg:mt-4">
          <img className="mt-3 h-2/3 lg:w-6 lg:h-6" src="./assets/icon-check.svg" alt="check" />
          <p className="mt-2 ml-3 font-bold text-gray-500 lg:text-xl">Expert Mentors</p>
        </div>
        <div className="flex flex-row ml-4 lg:ml-0 lg:mt-4">
          <img className="mt-3 h-2/3 lg:w-6 lg:h-6" src="./assets/icon-check.svg" alt="check" />
          <p className="mt-2 ml-3 font-bold text-gray-500 lg:text-xl">Expert Courses</p>
        </div>
        <div className="flex flex-row ml-4 lg:ml-0 lg:mt-4">
          <img className="mt-3 h-2/3 lg:w-6 lg:h-6" src="./assets/icon-check.svg" alt="check" />
          <p className="mt-2 ml-3 font-bold text-gray-500 lg:text-xl">Networking & Collaboration</p>
        </div>
        <div className="flex flex-row ml-4 lg:ml-0 lg:mt-4">
          <img className="mt-3 h-2/3 lg:w-6 lg:h-6" src="./assets/icon-check.svg" alt="check" />
          <p className="mt-2 ml-3 font-bold text-gray-500 lg:text-xl">Career Guidance</p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center lg:mt-16">
          <h1 className="font-bold text-center text-xl text-gray-600 lg:text-2xl">
            Less than a cup of coffee
          </h1>
          <div className="flex justify-center mt-3 flex-row gap-2">
            <h1 className="text-5xl text-center font-extrabold font-sans lg:text-6xl">$5</h1>
            <h1 className="line-through text-center text-4xl font-extrabold font-sans mt-1 text-gray-400 lg:text-5xl lg:mt-2">
              $1000
            </h1>
          </div>
          <a
            href="#"
            className="bg-green-600 text-center md:w-72 w-3/5 rounded-full hover:bg-green-800 mt-5 h-[50px] text-xl px-1 font-semibold lg:w-80 lg:h-14"
          >
            <p className="mt-3 text-xl text-white font-bold lg:text-2xl lg:mt-4">Join Community</p>
          </a>
          <p className="font-semibold mt-3 text-gray-600 lg:text-xl lg:mt-4">100+ Active Members</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
