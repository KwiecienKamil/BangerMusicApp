import React from "react";
import { SiApplemusic } from "react-icons/si";
import { useDispatch } from "react-redux";
import { musicData } from "../assets/audioData/musicData";
import { current, currentProg } from "../services/state/redux/store";

const Sponsored = ({ data, setIsPlaying }) => {
    const dispatch = useDispatch();
    const currentSong = musicData.filter((item) => item.title === data.tracks[3].title);
    const currentSponsoredSong = musicData.filter((item) => item.title === data.tracks[1].title);
  
    const handleDispatch = () => {
      const title = data.tracks[3].title
      const artist = data.tracks[3].subtitle
      const img = data.tracks[3].images.background
      const mp3 = currentSong[0].mp3;
      let index = currentSong.map((item) => item.index).toString();
      dispatch(current([title, mp3, artist, index, img]));
      dispatch(currentProg([0, 0]));
      setIsPlaying(false);
      console.log([title, mp3, artist, index, img]);
    };

    const handleSponsoredDispatch = () => {
        const title = data.tracks[1].title
        const artist = data.tracks[1].subtitle
        const img = data.tracks[1].images.background
        const mp3 = currentSponsoredSong[0].mp3;
        let index = currentSponsoredSong.map((item) => item.index).toString();
        dispatch(current([title, mp3, artist, index, img]));
        dispatch(currentProg([0, 0]));
        setIsPlaying(false);
      };
  return (
    <div className="px-4 py-4">
      <div className="w-[65.5%] flex justify-end px-4">
        <button className="p-2 bg-navbar hover:bg-black duration-300 text-[12px] mb-4 rounded-lg text-bgGradient1">
          Explore Premium
        </button>
      </div>
      <div className="flex justify-between gap-4 px-4">
        <div className="w-[65%] flex flex-col bg-navbar rounded-xl">
          <div className="flex items-center justify-between px-4 pt-2">
            <p className=" uppercase pb-1">Top Song</p>
            <p className="p-2 bg-black rounded-full text-[14px]">Sponsored</p>
          </div>
          <div className="flex items-center gap-8 pt-6 px-4 relative">
            <img
              src={data.tracks[1].images.background}
              alt="Top song"
              className="w-[55%] rounded-xl"
            />
            <div className="flex flex-col items-start pl-4">
              <h1 className="text-[22px]">
                {data.tracks[1].title}
              </h1>
              <h2 className="text-[22px] font-normal mb-1">
                {data.tracks[1].subtitle}
              </h2>
              <p className="text-[14px] font-normal">Top #1 Song Of The Week</p>
              <button onClick={handleSponsoredDispatch} className="mt-4 py-2 px-4 bg-white text-black rounded-full hover:bg-black hover:text-white duration-300">
                Add To Playlist
              </button>
            </div>
          </div>
        </div>
          <div className="w-[35%] flex items-start justify-center bg-navbar rounded-xl">
            <div className="flex flex-col px-4">
            <h2 className="text-[22px] py-2 text-center">This is {data.tracks[3].subtitle}</h2>
            <img src={data.tracks[3].images.background} alt="Artist" className="rounded-xl" />
            <div className="flex items-center justify-between py-4">
                <p className="flex items-center gap-2"><SiApplemusic />{data.tracks[3].title}</p>
                <button onClick={handleDispatch} className=" py-2 px-4 bg-white text-black rounded-full hover:bg-black hover:text-white duration-300">
                Add To Playlist
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
