import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between md:justify-around px-4 py-4'>
      <img src="./assets/logo.svg" alt="logo" />
      <div className=' hidden md:flex bg-gray-200 text-center font-bold md:justify-around justify-between px-1 py-1 md:py-6 rounded-full w-1/2 h-2/3 md:gap-5'>
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <a href="#">Pricing</a>
        <a href="#">Testinomials</a>
      </div>
      <a className='bg-green-950 text-white md:mt-3 px-2 py-2 font-semibold text-base h-11 text-center  rounded-3xl  hover:bg-green-600' href="#">Join Community</a>
    </div>  
  )
}

export default Header