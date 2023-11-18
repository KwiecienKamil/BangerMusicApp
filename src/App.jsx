import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import TopSongs from "./pages/TopSongs"
import Discover from "./pages/Discover"
import TopArtists from "./pages/TopArtists"
import Player from "./components/Player"

function App() {
  return (
    <>  
      <Navbar />
      <Player />
      <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/topartists" element={<TopArtists />} />
      <Route path="/topsongs" element={<TopSongs />} />
      </Routes>
    </>
  )
}

export default App
