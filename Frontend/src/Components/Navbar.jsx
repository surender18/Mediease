import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate = useNavigate();
  const [showMenu,setShowMenu]=useState(false)
  const [token,setToken]=useState(true)
  return (
    <div className="flex items-center justify-between text-sm py-5 mb-5 border-b border-b-gray-800">
      <img onClick={()=>Navigate("/")} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-[#0A6C74] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-[#0A6C74] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About Us</li>
          <hr className="border-none outline-none h-0.5 bg-[#0A6C74] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact Us</li>
          <hr className="border-none outline-none h-0.5 bg-[#0A6C74] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ">{
        token?<div className="flex items-center gap-2 cursor-pointer group relative">
          <img className="w-8
           rounded-full" src={assets.profile_pic} alt="profile pic" />
          <img className="w-2.5" src={assets.dropdown_icon} alt="" />
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p onClick={()=>Navigate("/myprofile")} className="hover:text-black cursor-pointer">My Profile</p>
              <p onClick={()=>Navigate("/myappointments")} className="hover:text-black cursor-pointer">My Appointments</p>
              <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        : <button
        onClick={() => Navigate("/login")}
        className="bg-[#0A6C74] cursor-pointer text-white px-8 py-3 rounded-full  font-light hidden md:block"
      > 
        Register
      </button>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
