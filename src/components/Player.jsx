import React from 'react'
import PlayerImg from "../images/player.jpg"
import { LuDna } from "react-icons/lu";

const Player = () => {
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
        <span>2:36</span>
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
  </div>
</div>

  
  )
}

export default Player