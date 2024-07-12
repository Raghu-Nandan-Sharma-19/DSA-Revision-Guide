import React from "react";
import Header from "./Header";

const Body = () => {
  return (
    
    <div className="lg:flex lg:justify-between ">
      <div className="flex flex-col justify-center lg:px-5  items-center text-center pt-10 py-5">
        <h1 className="text-green-500 lg:text-6xl  text-6xl md:text-8xl md:mt-1 md:font-sans font-sans font-extrabold">
          ATTEND LIVE
        </h1>
        <h1 className="text-black text-6xl mt-0 md:text-8xl md:mt-1 py-3 font-sans font-extrabold">
          CLASSES EVERY WEEK
        </h1>
        <p className="text-gray-500 mt-1 md:text-center md:font-extrabold text-xl px-4 leading-8 font-lato ">
          Join founders, freelancers, designers, FAANG engineers, indie hackers,
          and more in our 24/7 WhatsApp Group for less than a cup of coffee.
        </p>
        <a
          href="#"
          className="bg-green-500 rounded-full h-3/4 w-80 lg:w-[450px] lg:h-[50px] md:w-96 md:font-semibold font-bold text-lg mt-7 px-3 py-3
           text-white hover:bg-green-600 text-center">
          Join 24/7 Whatsapp + discord for $5/month
        </a>
      </div>
      <div className="px-5 mt-7 text-gray-700">
        <img className="lg:px-48 lg:ml-44 lg:mt-48 lg:mb-56 " src="./assets/ai-bootcamp.png" alt="ai-bootcamp banner" />
        <div className="flex lg:hidden flex-col mt-11 lg:justify-center lg:items-center justify-center" >
          <div className="text-lg ml-4 items-center font-sans flex flex-row justify-center font-semibold">
          <img src="./assets/ai-book.svg" alt="" />
          <h1 className="ml-4 mr-3 font-sans font-semibold">5+ Guides for Free</h1>
          </div>
          <div className="text-lg ml-4 mt-4 font-sans flex flex-row justify-center font-semibold">
          <img  src="./assets/ai-hat.svg" alt="whatsapp" />
          <h1 className="ml-4 mr-3 font-sans font-semibold">Exclusive Courses & Projects</h1>
          </div>
          <div className="text-lg ml-6 mt-4 font-sans flex flex-row justify-center font-semibold">
          <img  src="./assets/ai-call.svg" alt="whatsapp" />
          <h1 className="ml-4 mr-3 font-sans font-semibold">24/7 WhatsApp Support Group</h1>
          </div>
          <div className="text-lg ml-4 mt-4 font-sans flex flex-row justify-center font-semibold">
          <img  src="./assets/ai-session.svg" alt="whatsapp" />
          <h1 className="ml-4 mr-3 font-sans font-semibold">1:1 Free Session</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
