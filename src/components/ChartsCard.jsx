import React from "react";

const ChartsCard = ({ title, id, src, href, artist }) => {
  return (
        <div key={id} className="flex justify-center  mt-6 animate-slideup relative text-[14px] md:text-[18px]px-4">
          <a href={href} target="_blank" className="w-[70%] flex items-center justify-center hover:bg-white/5 duration-300 rounded-lg ">
          <img src={src} alt="background" className="md:w-36 w-24 rounded-full"/>
          <div className="w-[50%] flex flex-col items-center justify-center gap-2">
          <h1 className="text-[16px] text-white text-center pl-4">{title}</h1>
            {artist}
          </div>
          </a>
        </div>
        
  );
};

export default ChartsCard;
