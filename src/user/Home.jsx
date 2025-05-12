import React from "react";
import UserLayout from "../components/UserLayout";
import UserHeader from "../components/UserHeader";
import RecentPlays from "../components/RecentPlays";
import AlbumCard from "../components/AlbumCard";
import { SongData } from "../context/Song";
import SongList from "../components/SongList";

const Home = () => {
  const { songs, setSelectedSong, selectedSong, setIsPlaying } = SongData();

  const handlePlaySong = (songId) => {
    setSelectedSong(songId);
    console.log(selectedSong);
    setIsPlaying(true);
  };

  const chunkSize = 5;
  const songColumns = [];
  for (let i = 0; i < songs.length; i += chunkSize) {
    songColumns.push(songs.slice(i, i + chunkSize));
  }

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

        <div className="flex md:gap-2 gap-4 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfAcDALkSsCqPtfyFv69i8j0k_ZXVBM-Juw&s"
            alt="Singer image"
            className="md:w-12 md:h-12 w-8 h-8 object-cover rounded-full border-blue-800 border shadow-[0_0_5px_1px_#3b82f6]"
          />
          <div>
            <h2 className="text-blue-700 text-base leading-none">similar to</h2>
            <p className="text-lg leading-none">rlung</p>
          </div>
        </div>
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
          top picks for you
        </h2>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex md:gap-8 gap-32 ">
            {songColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col gap-4 min-w-[300px]"
              >
                {column.map((song) => (
                  <SongList
                    key={song._id}
                    img={song.thumbnail.url}
                    songName={song.title}
                    singerName={song.singer}
                    seekTime="3:00"
                    onPlay={() => handlePlaySong(song._id)}
                    isSelected={selectedSong === song._id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
