  import React, { useContext } from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import { AppContext } from '../context/AppContext'

  const TopDoctors = () => {
    const Navigate = useNavigate()
    const {doctors}=useContext(AppContext)

    return (
      <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 '>
        <h1 className='text-3xl text-center font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse our extensive list of trusted doctors</p>
       
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 px-3
        sm:px-1'>
          {doctors.slice(0,10).map((item,index)=>(
            <div  onClick={()=>Navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
              <img className='bg-blue-50' src={item.image} alt="" />
              <div className=' p-5
              '>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full' ></p><p>Available</p> 
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
              </div>

          ))}
        </div>
        <button onClick={()=>{Navigate('/doctors');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 cursor-pointer rounded-lg mt-10
        '>more</button>
      </div>
    )
  }

  export default TopDoctors
