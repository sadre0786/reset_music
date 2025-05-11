import React from "react";
import UserLayout from "../components/UserLayout";
import UserHeader from "../components/UserHeader";
import RecentPlays from "../components/RecentPlays";
import AlbumCard from "../components/AlbumCard";
import { SongData } from "../context/Song";

const Home = () => {
  const { songs, setSelectedSong, selectedSong, setIsPlaying } = SongData();

  const handlePlaySong = (songId) => {
    setSelectedSong(songId);
    console.log(selectedSong);
    setIsPlaying(true);
  };

  return (
    <UserLayout>
      <UserHeader />
      <div className="text-white px-4 py-2 flex flex-col gap-4">
        <h2 className="md:text-xl text-lg capitalize font-semibold">
          recent played
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {songs.map((song) => (
            <RecentPlays
              key={song._id}
              title={song.title}
              singer={song.singer}
              image={song.thumbnail.url}
              onPlay={() => handlePlaySong(song._id)}
              isSelected={selectedSong === song._id}
            />
          ))}
        </div>

        <h2 className="md:text-xl text-lg capitalize font-semibold">
          suggested playlist for you
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar whitespace-nowrap">
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
          <AlbumCard tag="#rock" artists="Led Zeppelin, The Rolling Stones" />
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
