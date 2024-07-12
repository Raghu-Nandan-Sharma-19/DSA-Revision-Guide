import React from 'react'
const Testimonials = () => {
  return (
    <div>
      <div className='flex flex-col mt-16'>
        <img className="px-36 rounded-full" src="./assets/avatar-aryan.webp" alt="avatar-aryan" />
        <h1 className='px-4 text-center text-gray-500 mt-4 font-serif'>"This community has been a game-changer for my career. The exclusive courses and 
            personalized guidance from expert mentors have helped me take my coding skills to the next level."</h1>
        
            <h1 className='text-center text-xl font-bold mt-3 font-sans'>Aryan Singh</h1>
            <p className='text-center'>SWE at Google</p>
            <div className='flex justify-center gap-2 mt-3'>
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
            </div>
      </div>
      <div className='flex flex-col mt-16'>
        <img className="px-36  rounded-full" src="./assets/avatar-kevin.webp" alt="avatar-aryan" />
        <h1 className='px-4 text-center text-gray-500 mt-4 font-serif'>"The exclusive courses and bi-weekly live 
        sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to
         build my portfolio. I highly recommend this community."</h1>
        
            <h1 className='text-center text-xl font-bold mt-3 font-sans'>Kevin Smith</h1>
            <p className='text-center'>SWE at Tesla</p>
            <div className='flex justify-center gap-2 mt-3'>
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
            </div>
      </div>
      <div className='flex flex-col mt-16'>
        <img id='umang' className="px-36 rounded-full" src="./assets/avatar-umang.webp" alt="avatar-aryan" />
        <h1 className='px-4 text-center text-gray-500 mt-4 font-serif'>"Joining this community was one of the best decisions I've made for 
        my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly
         recommend this community"</h1>
        
            <h1 className='text-center text-xl font-bold mt-3 font-sans'>Umang Chaudhary</h1>
            <p className='text-center'>SWE at Tiktok</p>
            <div className='flex justify-center gap-2 mt-3'>
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
                <img src="./assets/icon-star.svg" alt="star" />
            </div>
      </div>
      
      
    </div>
  )
}

export default Testimonials