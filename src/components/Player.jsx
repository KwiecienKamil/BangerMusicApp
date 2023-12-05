import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { musicData } from "../assets/audioData/musicData";
import { current } from "../services/state/redux/store";

const Player = ({ song, audioRef, isPlaying, setIsPlaying, data }) => {
  const [songVolume, setSongVolume] = useState(10)
  const dispatch = useDispatch();
  const songP = useSelector((state) => state.song);
  const clickRef = useRef();
  const volumeRef = useRef();
  const songD = data?.tracks.map((item) => item);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const changeWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = (offset / width) * 100;
    audioRef.current.currentTime = (divprogress / 100) * songP.songProg[1];
  };
  const changeVolume = (e) => {
    let width = 100;
    const offset = e.nativeEvent.offsetX;
    const finalProgress = offset.toFixed(1)
    const finalWidth = `${finalProgress[0] + "0%"}`
    audioRef.current.volume = `0.${finalProgress[0]}`
    setSongVolume(finalWidth);
  }

  const nextSong = () => {
    let curIndex = parseInt(song.value[3]);
    let curS = musicData.filter((item) => item.index == curIndex + 1);
    let index = curS.map((item) => item.index).toString();
    const mp3 = curS[0].mp3;
    const title = curS[0].title;
    const getData = songD.filter((item) => item.title == title);
    const artist = getData[0].subtitle;
    const img = getData[0].images.coverart;
    if(index == musicData.length - 1) {
      index = 0;
    }
    dispatch(current([title, mp3, artist, index,img]));
    setIsPlaying(false);
  };

  const prevSong = () => {
    let curIndex = parseInt(song.value[3]);
    let curS = musicData.filter((item) => item.index == curIndex - 1);
    let index = curS.map((item) => item.index).toString();
    const mp3 = curS[0].mp3;
    const title = curS[0].title;
    const getData = songD.filter((item) => item.title == title);
    const artist = getData[0].subtitle;
    const img = getData[0].images.coverart;
    if(index == musicData.length - 1) {
      index = 0;
    }else if (index == 1){
      index = musicData.length - 1;
    } 
    dispatch(current([title, mp3, artist, index,img]));
      setIsPlaying(false);
  };

  return (
    <div className="z-10 fixed h-[60px] lg:h-[12%] bottom-[70px] lg:bottom-0 bg-black left-0 w-full flex justify-between font-poppins font-semibold text-white">
      <div className="absolute left-0 h-full w-[34%] lg:w-[20%] bg-black flex items-center justify-center gap-4 ">
        <img
          src={songP.value[4]}
          alt="coverart"
          className="h-[80%] rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-[2px]">
          <h1 className="text-center text-[11px] md:text-[14px] lg:text-[16px] trim line-clamp-1">
            {song.value[0]}
          </h1>
          <h2 className="text-center text-[9px] md:text-[12px] lg:text-[14px]">
            {song.value[2]}
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-end ">
        <div className="w-[60%] lg:w-[80vw] flex flex-col items-center justify-center gap-1 lg:gap-4">
          <div className="flex items-center justify-center gap-2 ">
            <BiSolidSkipPreviousCircle
              onClick={prevSong}
              className="cursor-pointer hover:scale-[1.2] duration-200 ml-[5px] text-[30px] md:text-[35px] lg:text-[40px]"
            />
            {isPlaying ? (
              <FaPauseCircle
                onClick={handlePlayPause}
                className="cursor-pointer hover:scale-[1.2] duration-200 text-[25px] md:text-[30px] lg:text-[35px]"
                id="stopButton"
              />
            ) : (
              <FaPlayCircle
                onClick={handlePlayPause}
                className="cursor-pointer hover:scale-[1.2] duration-200 ml-[5px] text-[25px] md:text-[30px] lg:text-[35px]"
              />
            )}
            <BiSolidSkipNextCircle
              onClick={nextSong}
              className="cursor-pointer hover:scale-[1.2] duration-200 ml-[5px] text-[30px] md:text-[35px] lg:text-[40px]"
            />
          </div>
          <div
            onClick={changeWidth}
            ref={clickRef}
            className="relative flex items-center cursor-pointer w-[80%] before:absolute before:top-[50%] before:left-0 before:h-[2px] before:w-full before:bg-white opacity-40 before:rounded-full"
          >
            <div
              style={{ width: `${songP.songProg[0] + "%"}` }}
              className="z-[10] h-[4px] bg-bgGradient1 rounded-xl"
            ></div> 
          </div>
        </div>
        <div
            onClick={changeVolume}
            ref={volumeRef}
            className="relative flex items-center cursor-pointer w-[100px] before:absolute before:top-[50%] before:left-0 before:h-[2px] before:w-full before:bg-white opacity-40 before:rounded-full"
          >
            <div
              style={{ width: `${songVolume + "0%"}` }}
              className=" z-[10] h-[4px] bg-bgGradient1 rounded-xl"
            ></div> 
          </div>
      </div>
    </div>
  );
};

export default Player;
