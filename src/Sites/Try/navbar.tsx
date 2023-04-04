import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:col-span-1 p-2 min-h-screen'>
        <div className='h-full rounded-md shadow-md p-2 shadow-gray-300 border-2 border-black flex flex-col'>
            <h1 className='text-center text-3xl underline font-bold p-2 cursor-pointer'><NavLink to={"/"}>Try</NavLink></h1>
            <NavLink to={"/try/modal"} className="w-full p-1 mb-1 text-xl font-semibold duration-150 hover:text-black rounded-md hover:scale-105 flex justify-center items-center border-2 border-gray-400">Modal</NavLink>
            <NavLink to={"/try/button"} className="w-full p-1 mb-1 text-xl font-semibold duration-150 hover:text-black rounded-md hover:scale-105 flex justify-center items-center border-2 border-gray-400">Button</NavLink>
            <NavLink to={"/try/slider"} className="w-full p-1 mb-1 text-xl font-semibold duration-150 hover:text-black rounded-md hover:scale-105 flex justify-center items-center border-2 border-gray-400">Slider</NavLink>
            <NavLink to={"/try/test"} className="w-full p-1 mb-1 text-xl font-semibold duration-150 hover:text-black rounded-md hover:scale-105 flex justify-center items-center border-2 border-gray-400">Test</NavLink>
        </div>
    </div>
  )
}

export default Navbar