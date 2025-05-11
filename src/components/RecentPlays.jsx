import React from "react";
import { RiPlayFill } from "react-icons/ri";

const RecentPlays = ({ title, singer, image, onPlay, isSelected }) => {
  return (
    <div
      className="w-28 md:w-48 flex-shrink-0 cursor-pointer group"
      onClick={onPlay}
    >
      <div
        className={`relative md:w-48 md:h-48 h-28 w-28 rounded-lg overflow-hidden 
          ${
            isSelected
              ? "border-2 border-blue-500 shadow-xl shadow-blue-500/50"
              : ""
          }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-20 transition">
          <button className="absolute bottom-2 left-2 bg-gray-200 text-black p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition hover:scale-110">
            <RiPlayFill size={14} />
          </button>
        </div>
      </div>

      <p className="md:text-base mt-2 truncate">{title}</p>
      <span className="text-blue-500 text-xs truncate">{singer}</span>
    </div>
  );
};

export default RecentPlays;
