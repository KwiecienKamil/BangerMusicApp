import React from "react";
import SongCart from "../components/SongCart";

import { useGetTopChartsQuery } from "../services/TopChartsApi";
import Loader from "../components/Loader";
import {GiMusicalNotes} from 'react-icons/gi'
import Header from "../utils/header";



const Discover = ({setIsPlaying,data,isFetching,error}) => {
  if (isFetching) return <Loader title="Loading..." />;
  if (error) return <Error />;
  return (
    <div className="bg-[url('./assets/bg.jpg')] bg-bottom font-poppins font-semibold text-white lg:flex lg:justify-end">
      <div className="lg:w-[80vw]">
      <Header route="Discover"/>
      <div className="px-4 my-4 pb-32">
        <div className="">
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4 md:px-12 lg:px-24 pb-4">
          {data?.tracks.map((song, i) => (
            <SongCart key={song.key} data={data} song={song} i={i} setIsPlaying={setIsPlaying} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Discover;
