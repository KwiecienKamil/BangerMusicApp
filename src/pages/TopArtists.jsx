import React from "react";
import ArtistCard from "../components/ArtistCard";
import { artists } from "../assets/artists";
import TopOFAllTIme from "../components/TopOFAllTIme";

const TopArtists = () => {
  return (
    <div className="w-1/2 flex flex-col gap-4">
     <TopOFAllTIme />
      <div className="h-[40%] bg-navbar rounded-xl">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 pt-4">
            <h2 className="uppercase ">Top Artists</h2>
            <p className="p-2 bg-black rounded-full text-[14px]">Powered By Shazam</p>
          </div>
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2">
          {artists.map((item) => {
            return (
              <ArtistCard
                artist={item.name}
                age={item.age}
                src={item.src}
                id={item.key}
                key={item.key}
                profile={item.profile}
              />
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
