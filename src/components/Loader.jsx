import React from 'react'
import loader from '../assets/loader.svg'

const Loader = ({title}) => {
  return (
    <div className="flex justify-center items-end flex-col font-poppins bg-[url('./assets/bg.jpg')] text-white pt-16">
      <div className="w-[80vw] h-screen flex justify-center">
      <img src={loader} alt="loader" className='w-32 h-32 object-contain'/>
      <h1 className='text-2xl mt-2'>{title || "Loading..."}</h1>
      </div>
    </div>
  )
}

export default Loader
