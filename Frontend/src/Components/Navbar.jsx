import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate = useNavigate();
  const [showMenu,setShowMenu]=useState(false)
  const [token,setToken]=useState(true)
  const[showDropdown,setShowDropdown]=useState(false)
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
        token?<div className="flex items-center gap-2 cursor-pointer  relative" onClick={()=>setShowDropdown(!showDropdown)}>
          <img className="w-8
           rounded-full" src={assets.profile_pic} alt="profile pic" />
          <img className="w-2.5" src={assets.dropdown_icon} alt="" />
          {showDropdown &&(
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  ">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p onClick={()=>Navigate("/myprofile")} className="hover:text-black cursor-pointer">My Profile</p>
              <p onClick={()=>Navigate("/myappointments")} className="hover:text-black cursor-pointer">My Appointments</p>
              <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
          )}
        </div>
        : <button
        onClick={() => Navigate("/login")}
        className="bg-[#0A6C74] cursor-pointer text-white px-8 py-3 rounded-full  font-light hidden md:block"
      > 
        Register
      </button>
        }
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        {/* mobile menu */}
        <div className={`${showMenu ? 'fixed w-full': 'h-0 w-0 '} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`} >
          <div className="flex items-center justify-between px-5 py-6" >
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 font-medium text-gray-600">
            <NavLink   onClick={()=>setShowMenu(false)} to='/'><p  className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p> </NavLink> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// 421