import React from "react";
import { RiSkipRightFill } from "react-icons/ri";

const RecentPlays = () => {
  return (
    <div className="text-white px-4 py-2 flex flex-col gap-3">
      <div className="flex justify-between">
        <h2 className="text-xl">recent played</h2>
        <RiSkipRightFill className="text-gray-400 text-lg cursor-pointer" />
      </div>

      <div className="flex gap-4 overflow-auto">
        <div className="w-52">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            alt="song thumbnail image"
            className="w-48 h-48 object-cover rounded-lg hover:shadow-lg hover:shadow-blue-600"
          />
          <p className="text-lg mt-1 leading-none">song name</p>
          <span className="text-blue-700 text-sm leading-none mt-0">
            singer name
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentPlays;
