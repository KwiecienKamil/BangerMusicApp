import React from "react";
import ArtistCard from "../components/ArtistCard";
import { artists } from "../assets/artists";
import Mainheader from "../components/Mainheader";

const TopArtists = () => {
  return (
    <div className="min-h-screen w-full lg:flex lg:justify-end bg-[url('./assets/bg.jpg')] bg-bottom font-poppins font-semibold text-white pb-[150px]">
      <div className="lg:w-[80vw]">
        <Mainheader route="Top Artists" />
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 w-full md:pt-[50px] lg:pt-[120px] ">
          {artists.map((item) => {
            return (
              <ArtistCard
                artist={item.name}
                age={item.age}
                src={item.src}
                id={item.key}
                profile={item.profile}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
