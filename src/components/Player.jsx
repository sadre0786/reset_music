// Player.jsx

import React, { useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";
import PlayerImg from "../images/player.jpg";
import { LuDna } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import {
  RiSkipLeftFill,
  RiSkipRightFill,
  RiVolumeUpFill,
  RiVolumeMuteFill,
} from "react-icons/ri";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";

// Sample songs (no hardcoded duration anymore)
const songs = [
  {
    title: "wound in flesh",
    artist: "Ed Sheeran",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    src: "https://res.cloudinary.com/dqlbaphus/video/upload/v1745150529/icqpas8u5xj2ioiewndc.mp3",
  },
  {
    title: "alone in dark",
    artist: "Hanin Dhiya",
    img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212",
    src: "https://res.cloudinary.com/dqlbaphus/video/upload/v1745141932/soh0ftaatq3dqd5f8qqs.mp3",
  },
  {
    title: "beñice",
    artist: "Meghan Trainor",
    img: "https://plus.unsplash.com/premium_photo-1680764500197-7de58b7974bd",
    src: "https://res.cloudinary.com/dqlbaphus/video/upload/v1745150529/icqpas8u5xj2ioiewndc.mp3",
  },
  {
    title: "benificence",
    artist: "Jaymes Young",
    img: "https://images.unsplash.com/photo-1571310100246-e0676f359b42",
    src: "https://res.cloudinary.com/dqlbaphus/video/upload/v1745141932/soh0ftaatq3dqd5f8qqs.mp3",
  },
];

// Helper to format time like 2:45
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const Player = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [open, setOpen] = useState(true);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.5);

  const playerRef = useRef(null);

  const currentSong = songs[currentIndex];
  const trackStyle = {
    background: `linear-gradient(to right, #007aff ${
      volume * 100
    }%, #ffffff22 ${volume * 100}%)`,
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle mute function
  const handleToggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleSongEnd = () => {
    handleNext();
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value) / 100);
  };

  const handleLoad = () => {
    const sound = playerRef.current?.howler;
    if (sound) {
      setDuration(sound.duration());
    }
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
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="player-wrapper shadow-[-10px_-10px_80px_rgba(0,153,255,0.4)] shadow-[#0e52ff3b]">
      <ReactHowler
        src={currentSong.src}
        playing={isPlaying}
        volume={volume}
        ref={playerRef}
        onEnd={handleSongEnd}
        onLoad={handleLoad}
      />

      <div className="player-card w-[15.25rem] py-4 px-4 flex flex-col items-center">
        <div className="w-full aspect-square overflow-hidden rounded-md">
          <img
            src={currentSong.img || PlayerImg}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <p className="text-lg mt-2">{currentSong.title}</p>
        <span className="text-sm text-gray-500">{currentSong.artist}</span>

        {/* Track Progress */}
        <div className="w-full mt-4">
          <input
            type="range"
            min="0"
            max={duration}
            value={seek}
            onChange={(e) => {
              const newSeek = parseFloat(e.target.value);
              setSeek(newSeek);
              const sound = playerRef.current?.howler;
              if (sound) {
                sound.seek(newSeek);
              }
            }}
            className="track-progress w-full h-1 appearance-none rounded"
          />
          <div className="flex justify-between text-xs text-gray-300 mt-1 px-[2px]">
            <span>{formatTime(seek)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-between mt-4">
          <div className="button-wrapper shadow-md shadow-gray-800">
            <button className="player-button flex justify-center items-center gap-2">
              <LuDna className="text-blue-500 text-sm" /> lossless
            </button>
          </div>
          <div className="button-wrapper shadow-md shadow-gray-800">
            <button className="player-button">reset master</button>
          </div>
        </div>

        {/* Player Controls */}
        <div className="w-full mt-4 flex justify-between items-center">
          <CiHeart className="text-xl text-gray-400" />
          <RiSkipLeftFill
            className="text-md text-white cursor-pointer"
            onClick={handlePrev}
          />
          <div className="play-pause-wrapper shadow-xl shadow-blue-800 flex justify-center items-center">
            <button
              className="play-pause-button flex justify-center items-center gap-2"
              onClick={handleTogglePlay}
            >
              {isPlaying ? (
                <FaPause className="text-sm" />
              ) : (
                <FaPlay className="text-sm" />
              )}
            </button>
          </div>
          <RiSkipRightFill
            className="text-md text-white cursor-pointer"
            onClick={handleNext}
          />
          <IoIosMore className="text-md text-white" />
        </div>

        <div className="player-gradiant-line mt-4"></div>

        {/* Volume Control */}
        <div className="flex w-full mt-4 justify-between items-center">
          <button onClick={handleToggleMute} className="focus:outline-none">
            {isMuted ? (
              <RiVolumeMuteFill className="text-base text-gray-400" />
            ) : (
              <RiVolumeUpFill className="text-base" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume * 100}
            onChange={handleVolumeChange}
            className="neon-range w-[90%] h-2 appearance-none rounded-full"
            style={trackStyle}
          />
        </div>
        <div className="gradiant-line mt-4"></div>

        {/* Playing Next Section */}
        <div className="w-full rounded-md p-3 mt-4 relative text-white shadow-md bg-transparent overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
          <div className="relative z-10">
            <div
              className="flex justify-between items-center cursor-pointer mb-2"
              onClick={() => setOpen(!open)}
            >
              <h2 className="text-sm font-semibold tracking-wide">
                playing next
              </h2>
              {open ? <FiChevronUp /> : <FiChevronDown />}
            </div>

            {open && (
              <div className="space-y-3">
                {songs.map((song, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between text-sm cursor-pointer hover:bg-blue-800/30 rounded-md p-1 transition ${
                      idx === currentIndex ? "bg-blue-800/40" : ""
                    }`}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(true);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={song.img}
                        alt=""
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div className="flex flex-col text-left">
                        <span className="font-medium text-[13px]">
                          {song.title}
                        </span>
                        <span className="text-[11px] text-gray-300">
                          {song.artist}
                        </span>
                      </div>
                    </div>
                    {/* Show actual duration (dynamic) for playlist */}
                    <span className="text-xs text-gray-200">
                      {idx === currentIndex ? formatTime(duration) : "--:--"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
