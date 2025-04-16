import React from "react";
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#0A6C74] rounded-lg px-6 md:px-10 lg:px-20">
      {/* left side */}

      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[- 30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment<br className="hidden sm:block"/> With Trusted Dotors.</p>
        <div className=" flex flex-col md:flex-col items-center gap-3 text-white  font-light" >
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p className="text-[#F4F8F9]">Lorem ipsum dolor sit amet consectetur adip\isicing elit. <br className="hidden sm:block" /> Commodi, fiat dolores libero architecto illo .</p>
          <a className="flex items-center gap-2 bg-white px-8 py-3 rounded-lg text-gray-600 font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 " href="#speciality">Book appointment <img className="w-3" src={assets.arrow_icon } alt="" /></a>
        </div>
      </div>
      {/* right side */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg " src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
// 57