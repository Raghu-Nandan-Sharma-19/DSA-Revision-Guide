import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-4 py-4'>
      <img src="./assets/logo.svg" alt="logo" />
      <a className='bg-green-950 text-white px-2 py-2 font-semibold text-base h-11 text-center  rounded-3xl  hover:bg-green-600' href="#">Join Community</a>
    </div>  
  )
}

export default Header