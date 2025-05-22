import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className=' font-semibold text-gray-700'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='rounded-b-2xl w-full md:w-[360px]' src={assets.contact_image} alt="contact image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>398 Thane <br /> Mumbai, INDIA </p>
          <p className='text-gray-500'>Tel: 8989898989 <br />email:mediease.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at Mediease</p>
          <p className='text-gray-500'>Learn more about Jobs at Mediease. </p>
          <button className='border border-black px-8 py-2 rounded text-sm hover:bg-black hover:text-white transition-all duration-300 '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
