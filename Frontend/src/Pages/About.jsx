import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium' >US</span></p>
      </div>
      <div className='my-10  flex flex-col  md:flex-row gap-12 '>
        <img className='w-full rounded-b-2xl md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-md text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem autem nam labore facilis, magnam omnis hic maiores corporis repudiandae provident!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae molestiae veniam esse repellendus nostrum tempore iste quibusdam tempora et quod hic aperiam ipsam libero, omnis ratione animi unde fugit mollitia!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ut laborum optio deserunt dolor dolorem.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span 
        className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className=' px-10 md:px-16 py-8 sm:py-16
         flex flex-col gap-5 text-[15px] hover:bg-[#0A6C74] hover:text-white transition-all duration-500 text-gray-500 cursor-pointer '>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-16
         flex flex-col gap-5 text-[15px] hover:bg-[#0A6C74] hover:text-white transition-all duration-500 text-gray-500 cursor-pointer '>
          <b>Convenience:</b>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#0A6C74] hover:text-white transition-all duration-500 text-gray-500 cursor-pointer '>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

        </div>
      </div>
    </div>
  )
}

export default About
