import React from "react";

const ChartsCard = ({ title, id, src, href, artist }) => {
  return (
        <div key={id} className="flex justify-center mt-6 animate-slideup text-[14px] md:text-[18px]">
          <a href={href} target="_blank">
          <div className="relative w-[250px] h-[280px] p-4 flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-onyx duration-300 rounded-lg ">
          <img src={src} alt="background" className="w-36"/>
          <div className="w-[50%] flex flex-col items-center justify-center gap-4">
          <h1 className=" text-[16px] text-white text-center trim line-clamp-1">{title}</h1>
          <h2 className="text-center">{artist}</h2>
          </div>
          </div>
          </a>
        </div>
        
  );
};

export default ChartsCard;
