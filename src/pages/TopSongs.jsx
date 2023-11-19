import React from "react";
import { useGetTopChartsQuery } from "../services/TopChartsApi";
import Loader from "../components/Loader";
import ChartsCard from "../components/ChartsCard";
import Mainheader from "../components/Mainheader";

const TopSongs = () => {
  const { data, isFetching } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="Loading..." />;

  const arr = [];
  const topChartsFn = () => {
    for (let i = 0; i < 10; i++) {
      arr.push(data.tracks[i]);
    }
  };
  return (
    <div className="min-h-screen w-full lg:flex lg:justify-end bg-[url('./assets/bg.jpg')] font-poppins font-semibold text-white pb-[150px] md:pb-[200px]">
      <div className="lg:w-[80vw]">
        <Mainheader route="Top Songs" />
        {topChartsFn()}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {arr.map((item) => (
            <ChartsCard
              key={item.key}
              id={item.key}
              title={item.title}
              artist={item.subtitle}
              src={item.images.coverart}
              href={item.share.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSongs;
