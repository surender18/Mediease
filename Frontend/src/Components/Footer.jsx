import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const Navigate =useNavigate()
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left */}
        <div >
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde dolorem ipsa provident veritatis sint adipisicing elit. Minima unde dolorem ipsa provident veritatis sint..</p>
             
        </div>
        {/* center */}
        <div>
        <p  className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-2 to-gray-600'>
            <li onClick={()=>{Navigate('/');scrollTo(0,0)}} className='cursor-pointer '>Home</li>
            <li onClick={()=>{Navigate('/about');scrollTo(0,0)}} className='cursor-pointer'>About Us</li>
            <li onClick={()=>{Navigate('/contact');scrollTo(0,0)}} className='cursor-pointer'>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        {/* right */}
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 to-gray-600'>
                <li>+91 55858566</li>
                <li>Mediease.com</li>
            </ul>

        </div>
      </div>
      {/* copyright */}
      <div className='items-center  ' >
        <hr />
        <p className='text-center  py-5 text-gray-600 font-semibold'>©️ mediease 2025 .
           </p>
      </div>
    </div>
  )
}

export default Footer
