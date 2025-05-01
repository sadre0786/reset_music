import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./user/Home";
import Browse from "./user/Browse";
import Search from "./user/Search";
import Library from "./user/Library";
import CreatePlayList from "./user/CreatePlayList";
import LikedSong from "./user/LikedSong";


function App() {
  return (
    <>

    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/browse" element={<Browse />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/library" element={<Library />}/>
      <Route path="/create-playlist" element={<CreatePlayList />}/>
      <Route path="/liked-song" element={<LikedSong />}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
