import React from 'react'
import {GiMusicalNotes} from 'react-icons/gi'

const Header = (props) => {
  return (
    <div className="flex items-center justify-between pt-6 px-4 md:px-16 lg:px-28 text-white">
    <h2 className='text-[18px] md:text-[20px] lg:text-[22px] font-danc flex items-center gap-1'>Banger<GiMusicalNotes /></h2>
    <h1 className="text-[14px] md:text-[18px]">{props.route}</h1>
    </div>
  )
}

export default Header
