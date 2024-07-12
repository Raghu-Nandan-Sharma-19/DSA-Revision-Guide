import React from 'react'

const Job = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className='flex flex-col justify-center mt-14 md:mt-14 lg:mt-24 px-6 lg:items-center lg:text-center'>
        <h1 className='text-center text-3xl md:text-5xl lg:text-6xl font-bold mt-14 md:mt-24 lg:px-28'>GAIN A COMPETITIVE EDGE IN THE JOB MARKET</h1>
        <p className='text-center font-bold text-gray-600 mt-5 md:text-xl lg:text-2xl md:mt-10 lg:px-20'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
        <h1 className='text-center text-green-600 font-extrabold mt-5 md:mt-10 lg:mt-12 lg:text-3xl'>WHAT YOU'LL GET</h1>
        <div className="lg:flex lg:justify-center lg:mt-10 lg:space-x-10">
          <div className="flex flex-col items-center lg:items-start">
            <img className='py-4 px-36 md:px-80 lg:px-0' src="./assets/icon-guides-2.svg" alt="Comprehensive guides, projects, & courses" />
            <p className='text-center font-bold mb-2 text-gray-600 lg:text-xl'>Comprehensive guides, projects, & courses</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <img className='py-4 px-36 md:px-80 lg:px-0' src="./assets/icon-job.svg" alt="Exclusive job + internship postings" />
            <p className='text-center font-bold mb-2 text-gray-600 lg:text-xl'>Exclusive job + internship postings</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <img className='py-4 px-36 md:px-80 lg:px-0' src="./assets/icon-tips.svg" alt="1:1 Career guidance & mentorship" />
            <p className='text-center font-bold mb-2 text-gray-600 lg:text-xl'>1:1 Career guidance & mentorship</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job
