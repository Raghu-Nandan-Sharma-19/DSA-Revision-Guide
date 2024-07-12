import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col mt-16 lg:flex-row lg:justify-around lg:items-center lg:gap-10">
        <div className="flex flex-col items-center">
          <img className="w-36 h-36 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full" src="./assets/avatar-aryan.webp" alt="avatar-aryan" />
          <h1 className="px-4 text-center md:font-extrabold md:text-lg md:mt-9 md:text-center lg:text-xl lg:mt-6 text-gray-500 mt-4 font-serif">
            "This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level."
          </h1>
          <h1 className="text-center text-xl font-bold mt-3 font-sans">Aryan Singh</h1>
          <p className="text-center">SWE at Google</p>
          <div className="flex justify-center gap-2 mt-3">
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 lg:mt-0">
          <img className="w-36 h-36 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full" src="./assets/avatar-kevin.webp" alt="avatar-kevin" />
          <h1 className="px-4 text-center md:font-extrabold md:text-lg md:mt-9 md:text-center lg:text-xl lg:mt-6 text-gray-500 mt-4 font-serif">
            "The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community."
          </h1>
          <h1 className="text-center text-xl font-bold mt-3 font-sans">Kevin Smith</h1>
          <p className="text-center">SWE at Tesla</p>
          <div className="flex justify-center gap-2 mt-3">
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 lg:mt-0">
          <img className="w-36 h-36 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full" src="./assets/avatar-umang.webp" alt="avatar-umang" />
          <h1 className="px-4 text-center md:font-extrabold md:text-lg md:mt-9 md:text-center lg:text-xl lg:mt-6 text-gray-500 mt-4 font-serif">
            "Joining this community was one of the best decisions I've made for my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly recommend this community."
          </h1>
          <h1 className="text-center text-xl font-bold mt-3 font-sans">Umang Chaudhary</h1>
          <p className="text-center">SWE at Tiktok</p>
          <div className="flex justify-center gap-2 mt-3">
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
            <img src="./assets/icon-star.svg" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
