import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=' mt-4 flex justify-center'>
        <img src="./assets/logo.svg" alt="" />
      </div>
      <div className='flex justify-center gap-5 mt-6 flex-row'>
        <img src="./assets/icon-twitter.svg" alt="" />
        <img  src="./assets/icon-youtube.svg" alt="" />
        <img src="./assets/icon-linkedin.svg" alt="" />
        <img  src="./assets/icon-instagram.svg" alt="" />
      </div>
      <div className='flex justify-center mt-10 pb-14'>
        <p>2023 © DSA revision</p>
      </div>
    </div>
  )
}

export default Footer