import React from 'react'

const ArtistCard = ({artist, age, src, id, profile}) => {
  return (
    <div key={id} className="flex items-center justify-center gap-4 mt-8 animate-slideup w-full">
      <img src={src} alt="artist" className="h-24 w-24 md:w-[150px] md:h-[150px] rounded-full"/>
        <div className="pl-[30px]">
            <p>{artist}</p>
            <p>{`Age: ${age}`}</p>
            <div className="flex items-center gap-2 mt-2 text-[13px]">
            <a href={profile} target='_blank' className='px-2 py-2 bg-bgGradient2 rounded-lg cursor-pointer hover:brightness-[85%] duration-200'>Shazam Profile</a>
            </div>
        </div>
    </div>
  )
}

export default ArtistCard
