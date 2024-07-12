import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className="flex flex-col justify-center mt-10 md:mt-24 px-5 lg:items-center lg:text-center">
        <h1 className="text-2xl md:px-24 md:text-5xl font-bold lg:text-6xl">EVERYTHING YOU NEED IN ONE COMMUNITY</h1>
        <p className="text-gray-600 font-semibold md:ml-24 mt-2 md:mt-4 md:text-xl lg:text-2xl">Unleashing your digital potential for lasting success</p>
      </div>
      <div className="flex flex-col justify-center mt-5 px-11 md:px-72 lg:max-w-4xl lg:mx-auto">
        <img className="lg:w-full lg:mt-8" src="./assets/illustration-mentors.svg" alt="mentors" />
        <h1 className="text-center text-2xl font-bold md:text-3xl mt-3 lg:mt-5">EXPERT MENTORS</h1>
        <p className="text-center text-gray-600 mt-2 tracking-wide md:font-bold lg:text-xl">Get personalized guidance from expert mentors to take your coding skills to the next level.</p>
        <img className="mt-6 lg:w-full lg:mt-12" src="./assets/illustration-networking.svg" alt="networking" />
        <h1 className="text-center text-2xl font-bold md:text-3xl mt-3 lg:mt-5">NETWORKING</h1>
        <p className="text-center text-gray-600 mt-2 tracking-wide md:font-bold lg:text-xl">Connect with like-minded coders from around the world and collaborate on exciting projects.</p>
        <img className="mt-12 lg:w-full lg:mt-16" src="./assets/illustration-courses.svg" alt="courses" />
        <h1 className="text-center text-2xl font-bold md:text-3xl mt-3 lg:mt-5">COURSES</h1>
        <p className="text-center text-gray-600 mt-2 tracking-wide md:font-bold lg:text-xl">Exclusive courses in Full Stack, AI, Blockchain, and more to help you stay ahead of the curve.</p>
      </div>
    </div>
  );
};

export default Features;
