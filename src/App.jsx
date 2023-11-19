import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import TopSongs from "./pages/TopSongs";
import Discover from "./pages/Discover";
import TopArtists from "./pages/TopArtists";
import Player from "./components/Player";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentProg } from "./services/state/redux/store";
import { useGetTopChartsQuery } from "./services/TopChartsApi";

function App() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const songD = useSelector((state) => state.song);
  console.log(data);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const currTime = audioRef.current.currentTime;
    dispatch(currentProg([(currTime / duration) * 100, duration]));
  };

  return (
    <>
      <Navbar />
      <Player
        song={songD}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        data={data}
      />
      <audio ref={audioRef} src={songD.value[1]} onTimeUpdate={onPlaying} />
      <Routes>
        <Route
          path="/"
          element={
            <Discover
              setIsPlaying={setIsPlaying}
              data={data}
              isFetching={isFetching}
              error={error}
            />
          }
        />
        <Route path="/topartists" element={<TopArtists />} />
        <Route path="/topsongs" element={<TopSongs />} />
      </Routes>
    </>
  );
}

export default App;
