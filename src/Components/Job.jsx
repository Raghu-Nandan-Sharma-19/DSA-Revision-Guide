import React from 'react'

const Job = () => {
  return (
    <div>
      <div className='flex flex-col px-6 justify-center'>
        <h1 className='text-center mt-14 font-bold text-3xl'>GAIN A COMPETIVE EDGE IN JOB MARKET</h1>
        <p className='text-center font-bold mt-5 text-gray-600'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp 
            Group for less than a cup of coffee.</p>
        <h1 className='text-center mt-5 text-green-600 font-extrabold'>WHAT YOU'LL GET</h1>
        <img className='py-4 px-36' src="./assets/icon-guides-2.svg" alt="" />
        <p className='text-center font-bold mb-2 text-gray-600'>Comprehensive guides, projects, & courses</p>
        <img className='py-4 px-36' src="./assets/icon-job.svg" alt="" />
        <p className='text-center font-bold mb-2 text-gray-600'>Exclusive job + internship postings</p>
        <img className='py-4 px-36' src="./assets/icon-tips.svg" alt="" />
        <p className='text-center font-bold mb-2 text-gray-600'>1:1 Career guidance & mentorship</p>
      </div>
    </div>
  )
}

export default Job