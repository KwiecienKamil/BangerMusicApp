import React from 'react'
import loader from '../assets/loader.svg'

const Loader = ({title}) => {
  return (
    <div className='flex justify-center items-center flex-col font-poppins'>
      <img src={loader} alt="loader" className='w-32 h-32 object-contain'/>
      <h1 className='text-2xl mt-2'>{title || "Loading..."}</h1>
    </div>
  )
}

export default Loader
