import React from 'react'

const Features = () => {
  return (
    <div>
      <div className='flex flex-col justify-center mt-10 px-5'>
        <h1 className='text-center text-2xl font-bold'>EVERYTHING YOU NEED IN ONE COMMUNITY</h1>
        <p className='text-center font-semibold mt-2 text-gray-600'>Unleashing your digital potential for 
        lasting success</p>
      </div>
        <div className='flex flex-col justify-center mt-5 px-11'>
            <img src="./assets/illustration-mentors.svg" alt="mentors" />
            <h1 className='text-center text-2xl font-bold'>EXPERT MENTORS</h1>
            <p className='text-center text-gray-600 mt-2 tracking-wide 
            font-bold '>Get personalized guidance from expert mentors to take your coding skills to the 
            next level.</p>
            <img className='mt-6' src="./assets/illustration-networking.svg" alt="networking" />
            <h1 className='text-center text-2xl font-bold'>NETWORKING</h1>
            <p className='text-center text-gray-600 mt-2 tracking-wide 
            font-bold '>Connect with like-minded coders from around the world and collaborate on exciting 
            projects.</p>
            <img className='mt-12' src="./assets/illustration-courses.svg" alt="networking" />
            <h1 className='text-center mt-3 text-2xl font-bold'>COURSES</h1>
            <p className='text-center text-gray-600 mt-2 tracking-wide 
            font-bold '>Exclusive courses in Full Stack, AI, Blockchain, and more to help you 
            stay ahead of the curve.</p>
        </div>
    </div>
  )
}

export default Features