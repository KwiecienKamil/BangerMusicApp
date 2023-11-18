import React, { useState, useRef, useEffect }  from 'react'
import { FaPauseCircle, FaPlayCircle} from "react-icons/fa";
import {GiMusicalNotes} from 'react-icons/gi'
import { useSelector } from 'react-redux';


const Player = ({song, audioRef, isPlaying, setIsPlaying}) => {
  const songP = useSelector((state) => state.song)
  console.log(`z-[10] h-[3px] w-[${songP.songProg[0].toFixed(2) + "%"}] bg-bgGradient1`);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="z-10 fixed h-[50px] lg:h-[10%] bottom-[70px] lg:bottom-0 left-0 w-full bg-black flex justify-between px-[3%] md:px-16 lg:px-28 font-poppins font-semibold text-bgGradient1">
       <a href='/' className='text-[15px] md:text-[18px] lg:text-[23px] font-danc flex items-center gap-1'>Banger<GiMusicalNotes /></a>
      <div className="h-full w-full flex flex-col items-center justify-center gap-[2px] pr-2">
        <h1 className='text-center text-[11px] md:text-[14px] lg:text-[16px] trim line-clamp-1'>{song.value[0]}</h1>
        <h2 className='text-center text-[9px] md:text-[12px] lg:text-[14px]'>{song.value[2]}</h2>
      </div>
      <div className="flex items-center w-[300px] pr-16 cursor-pointer">
      <div style={{width: `${songP.songProg[0] + "%"}`}} className="z-[10] h-[3px] bg-bgGradient1"></div>
      <div className="z-[5] h-[3px] w-full bg-white/5"></div>
      </div>
      <div className="flex items-center justify-center gap-2">
      {isPlaying ?  <FaPauseCircle
        onClick={handlePlayPause}
        className="cursor-pointer hover:scale-[1.2] duration-200 text-[25px] md:text-[30px] lg:text-[35px]"
        id='stopButton'
      /> :
      <FaPlayCircle
        onClick={handlePlayPause}
        className="cursor-pointer hover:scale-[1.2] duration-200 ml-[5px] text-[25px] md:text-[30px] lg:text-[35px]"
      />}
      </div>
    </div>
  )
}

export default Player
