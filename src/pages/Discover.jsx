import React from "react";
import SongCart from "../components/SongCart";
import Loader from "../components/Loader";
import Sponsored from "../components/Sponsored";
import TopArtists from "./TopArtists";

const Discover = ({ setIsPlaying, data, isFetching, error }) => {
  if (isFetching) return <Loader title="Loading..." />;
  if (error) return <Error />;
  return (
    <div className="bg-[url('./assets/bg.jpg')] bg-bottom font-poppins font-semibold text-white lg:flex lg:justify-end">
      <div className="lg:w-[80vw] relative">
          <Sponsored data={data} setIsPlaying={setIsPlaying}/>
          <div className="flex gap-4 px-8">
          <div className="flex flex-col w-1/2 bg-navbar rounded-xl">
            <div className="text-center px-4 ">
              <h2 className="py-4">Popular songs</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-32">
            {data?.tracks.map((song, i) => (
              <SongCart
                key={song.key}
                data={data}
                song={song}
                i={i}
                setIsPlaying={setIsPlaying}
              />
            ))}
            </div>
          </div>
          <TopArtists  setIsPlaying={setIsPlaying}/>
          </div>
        </div>
      </div>
  );
};

export default Discover;
