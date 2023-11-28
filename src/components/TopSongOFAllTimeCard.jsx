import React from 'react'
import { musicData } from '../assets/audioData/musicData';
import { current } from '@reduxjs/toolkit';
import { currentProg } from '../services/state/redux/store';
import { useDispatch } from 'react-redux';

const TopSongOFAllTimeCard = (props) => {
    const dispatch = useDispatch();
    const currentSong = musicData.filter((item) => item.title === props.title);

    const handleDispatch = () => {
        const title = currentSong[0].title;
        const artist = currentSong[0].artist;
        const img = currentSong[0].src;
        const mp3 = currentSong[0].mp3;
        let index = currentSong.map((item) => item.index).toString();
        dispatch(current([title, mp3, artist, index, img]));
        dispatch(currentProg([0, 0]));
        setIsPlaying(false);
      };
  return (
    <div onClick={handleDispatch} className="w-[40%] flex items-center gap-4 relative rounded-xl bg-white/5 hover:bg-onyx duration-300 cursor-pointer">
    <div className="w-[40%]">
    <img className='h-[80px] w-[120px] object-cover object-top rounded-xl' src={props.src} alt={props.alt}/>
    </div>
    <div className="flex flex-col">
    <p className='text-[14px]'>{props.title}</p>
    <p className='text-[12px] font-normal'>{props.artist}</p>
    </div>
</div>
  )
}

export default TopSongOFAllTimeCard
