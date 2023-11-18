import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {musicData} from '../assets/audioData/musicData'
import { current, currentProg } from "../services/state/redux/store";


const SongCart = ({ song}) => {
  const dispatch = useDispatch()
  const currentSong = musicData.filter((item) => item.title === song.title);

  
  const handleDispatch = () => {
    const mp3 = currentSong[0].mp3
    const title = currentSong[0].title
    const artist = song.subtitle
    dispatch(current([title,mp3,artist]))
    dispatch(currentProg([0, 0]))
  }



  return (
    <div onClick={handleDispatch} className="px-1 py-1 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg hover:bg-bgGradient2 duration-300 cursor-pointer">
      <div className="relative flex flex-col items-center justify-center gap-2 pb-1 pt-4 rounded-lg">
        <img src={song.images.coverart} alt="song" className="w-[90%] rounded-lg" />
        <Link className="text-[12px] text-center ">
          {song.title}
        </Link>
        <Link className="text-[10px] text-gray-300 text-center">{song.subtitle}</Link>
      </div>
    </div>
  );
};

export default SongCart;
