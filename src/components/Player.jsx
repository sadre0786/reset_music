import React, { useState } from 'react'
import PlayerImg from "../images/player.jpg"
import { LuDna } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { RiSkipLeftFill,RiSkipRightFill,RiVolumeUpFill} from "react-icons/ri";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const songs = [
  {
    title: "wound in flesh",
    artist: "Ed Sheeran",
    duration: "3:27",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "alone in dark",
    artist: "Hanin Dhiya",
    duration: "3:27",
    img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "beñice",
    artist: "Meghan Trainor",
    duration: "3:27",
    img: "https://plus.unsplash.com/premium_photo-1680764500197-7de58b7974bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "benificence",
    artist: "Jaymes Young",
    duration: "3:27",
    img: "https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Player = () => {
  const [volume, setVolume] = useState(50);
  const trackStyle = {
    background: `linear-gradient(to right, #007aff ${volume}%, #ffffff22 ${volume}%)`
  };

  const [open, setOpen] = useState(true);
  
  return (
  
    <div className="player-wrapper shadow-[-10px_-10px_80px_rgba(0,153,255,0.4)] shadow-[#0e52ff3b]">
  <div className="player-card w-[15.25rem] py-4 px-4 flex flex-col items-center">
    <div className="w-full aspect-square overflow-hidden rounded-md">
      <img src={PlayerImg} className="w-full h-full object-cover" alt="" />
    </div>
    <p className='text-lg mt-2'>false altaras</p>
    <span className='text-sm text-gray-500'>Ben Hactor</span>
    

    <div className="w-full mt-4">
      <div className="relative w-full h-4 flex items-center">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-white via-gray-400 to-blue-500" />
        <input
          type="range"
          min="0"
          max="100"
          value="50"
          className="w-full h-2 appearance-none bg-transparent z-10 cursor-pointer"
        />

        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-0 shadow-[0_0_20px_10px_rgba(0,102,255,0.6)] pointer-events-none" />
      </div>
      <div className="flex justify-between text-xs text-white mt-1 px-[2px]">
        <span>1:21</span>
        <span>-2:36</span>
      </div>
    </div>

    <div className='w-full flex justify-between mt-4'>
    <div className="button-wrapper shadow-md shadow-gray-800">
            <button className="player-button flex justify-center items-center gap-2"><LuDna className='text-blue-500 text-sm'/> lossless</button>
          </div>
    <div className="button-wrapper shadow-md shadow-gray-800">
            <button className="player-button">reset master</button>
          </div>
    </div>

    <div className='w-full mt-4 flex justify-between items-center'>
      <CiHeart className='text-xl text-gray-400'/>
      <RiSkipLeftFill className='text-md text-white'/>
       
      <div className="play-pause-wrapper shadow-xl shadow-blue-800 flex justify-center items-center ">
            <button className="play-pause-button flex justify-center items-center gap-2"><FaPlay className='text-sm'/></button>
          </div>
         

      <RiSkipRightFill className='text-md text-white'/>
      <IoIosMore className='text-md text-white'/>
       
    </div>

    <div className='player-gradiant-line mt-4'></div>

    <div className='flex w-full mt-4 justify-between items-center'>
     <RiVolumeUpFill className='text-base'/>
     <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="neon-range w-[90%] h-2 appearance-none rounded-full"
        style={trackStyle}
      />
    </div>
    <div className='gradiant-line mt-4'></div>



    <div className="w-full rounded-md p-3 mt-4 relative text-white shadow-md bg-transparent overflow-hidden">
  <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />

  <div className="relative z-10">
    <div
      className="flex justify-between items-center cursor-pointer mb-2"
      onClick={() => setOpen(!open)}
    >
      <h2 className="text-sm font-semibold tracking-wide">playing next</h2>
      {open ? <FiChevronUp /> : <FiChevronDown />}
    </div>

    {open && (
      <div className="space-y-3">
        {songs.map((song, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <img
                src={song.img}
                alt=""
                className="w-10 h-10 rounded-md object-cover"
              />
              <div className="flex flex-col text-left">
                <span className="font-medium text-[13px]">{song.title}</span>
                <span className="text-[11px] text-gray-300">{song.artist}</span>
              </div>
            </div>
            <span className="text-xs text-gray-200">{song.duration}</span>
          </div>
        ))}
      </div>
    )}
  </div>
</div>


  </div>
</div>

  
  )
}

export default Player