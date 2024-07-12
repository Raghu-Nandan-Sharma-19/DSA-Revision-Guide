import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className='flex flex-col px-2 justify-center mt-16 '>
        <h1 className='font-bold text-3xl text-center'>SIMPLE NO-TRICKS PRICING</h1>
        <p className='text-center font-semibold text-gray-600 mt-5'>Everything you need to grow 10x for 
        less than  a coffee.</p>
      </div>
      <div className='mt-10 rounded-3xl px-5 border-black'>
        <h1 className='text-center text-black font-extrabold font-lato text-xl'>Premium Elite Subscription</h1>
        <p className='font-bold text-gray-400 mt-5 text-center'>Join founders, freelancers, designers, 
        FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
      </div>
      <div className='mt-9 flex flex-col rounded-3xl px-6  border-black'>
        <h1 className='px-3 font-bold text-green-600 font-serif'>What's included</h1>
        <div className='flex flex-row ml-4 '>
            <img className=' mt-3 h-2/3' src="./assets/icon-check.svg" alt="check" />
            <p className='mt-2 ml-3 font-bold text-gray-500'>Expert Mentors</p>
        </div>
        <div className='flex flex-row ml-4'>
            <img className=' mt-3 h-2/3' src="./assets/icon-check.svg" alt="check" />
            <p className='mt-2 ml-3 font-bold text-gray-500'>Expert Courses</p>
        </div>
        <div className='flex flex-row ml-4 '>
            <img className=' mt-3 h-2/3' src="./assets/icon-check.svg" alt="check" />
            <p className='mt-2 ml-3 font-bold text-gray-500'>Networkng & Collaboration</p>
        </div>
        <div className='flex flex-row ml-4 '>
            <img className=' mt-3 h-2/3' src="./assets/icon-check.svg" alt="check" />
            <p className='mt-2 ml-3 font-bold text-gray-500'>Career Guidance</p>
        </div>
        <div className='mt-12 flex flex-col items-center justify-center'>
            <h1 className='font-bold text-center text-xl text-gray-600'>Less than a cup of coffee</h1>
            <div className='flex justify-center mt-3 flex-row gap-2'>
                <h1 className='text-5xl text-center font-extrabold font-sans'>$5</h1>
                <h1 className='line-through text-center text-4xl font-extrabold font-sans mt-1 text-gray-400'>$1000</h1>
            </div>
            <a href="#" className='bg-green-600 text-center w-3/5 rounded-full hover:bg-green-800 mt-5 
            h-[50px] text-xl px-1 font-semibold'><p className='mt-3 text-xl
             text-white font-bold'>Join Community</p></a>
             <p className='font-semibold mt-3 text-gray-600'>100+ Active Members</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing