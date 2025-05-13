import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactHowler from "react-howler";
import { SongData } from "../context/Song";
import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const MobilePlayer = () => {
  const {
    song,
    isPlaying,
    setIsPlaying,
    nextMusic,
    prevMusic,
    selectedSong,
    setSelectedSong,
    songs,
  } = SongData();

  const currentSong = songs.find((s) => s._id === selectedSong) || songs[0];

  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.5);
  const playerRef = useRef(null);

  const currentIndex = songs.findIndex((s) => s._id === selectedSong);
  const nextSongs = songs.slice(currentIndex, currentIndex + 3);

  const handleLoad = () => {
    const sound = playerRef.current?.howler;
    if (sound) {
      setDuration(sound.duration());
    }
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        const sound = playerRef.current?.howler;
        if (sound) {
          setSeek(sound.seek());
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!song) return null;

  return (
    <>
      {currentSong?.audio?.url && (
        <ReactHowler
          src={currentSong.audio.url}
          playing={isPlaying}
          volume={volume}
          ref={playerRef}
          onLoad={handleLoad}
          onEnd={nextMusic}
        />
      )}

      <div className="md:hidden fixed bottom-16 left-0 right-0 z-40 bg-[#1a2236] border-t border-b border-gray-800">
        {/* Progress bar */}
        <div
          className="h-1 bg-blue-500"
          style={{ width: `${duration ? (seek / duration) * 100 : 0}%` }}
        ></div>

        <div className="p-3">
          <div className="flex items-center justify-between">
            {/* Song info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img
                src={currentSong?.thumbnail?.url}
                className="w-12 h-12 rounded-md shadow-[0_0_5px_1px_#3b82f6]"
                alt="Album cover"
              />
              <div className="min-w-0">
                <div className="text-sm font-medium text-white truncate">
                  {currentSong?.title}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {currentSong?.singer}
                </div>
                <div className="flex gap-2 text-xs mt-1">
                  <span className="text-blue-400">{formatTime(seek)}</span>
                  <span className="text-gray-500">{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button onClick={handleToggleMute} className="text-white">
                {isMuted ? (
                  <RiVolumeMuteFill size={18} />
                ) : (
                  <RiVolumeUpFill size={18} />
                )}
              </button>

              <div className="play-pause-wrapper shadow-[0_0_5px_1px_#3b82f6]">
                <button
                  className="play-pause-button"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <FaPause className="text-sm" />
                  ) : (
                    <FaPlay className="text-sm" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming songs (collapsible) */}
          <div className="mt-3 pt-3 border-t border-gray-800">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>Next in queue</span>
              <span>{nextSongs.length} songs</span>
            </div>
            <div className="space-y-2">
              {nextSongs.slice(0, 2).map((nextSong) => (
                <div
                  key={nextSong._id}
                  className="flex items-center gap-2 p-1 rounded hover:bg-gray-800/50"
                  onClick={() => {
                    setSelectedSong(nextSong._id);
                    setIsPlaying(true);
                  }}
                >
                  <img
                    src={nextSong.thumbnail.url}
                    className="w-8 h-8 rounded"
                    alt="Next song"
                  />
                  <div className="text-xs truncate flex-1">
                    {nextSong.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePlayer;
