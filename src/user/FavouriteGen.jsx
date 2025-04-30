import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import IconHeader from "../components/IconHeader";

const tags = [
  {
    id: "electronic",
    label: "#electronic",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
  },
  {
    id: "techno",
    label: "#techno",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    id: "idm",
    label: "#IDM",
    image: "https://images.unsplash.com/photo-1581091215367-59d3a6ccf3fc",
  },
  {
    id: "ambient",
    label: "#ambient",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: "soundtrack",
    label: "#soundtrack",
    image: "https://images.unsplash.com/photo-1600267165910-2f47d8eecf02",
  },
  {
    id: "soundtrack",
    label: "#soundtrack",
    image: "https://images.unsplash.com/photo-1600267165910-2f47d8eecf02",
  },
  {
    id: "soundtrack",
    label: "#soundtrack",
    image: "https://images.unsplash.com/photo-1600267165910-2f47d8eecf02",
  },
  {
    id: "soundtrack",
    label: "#soundtrack",
    image: "https://images.unsplash.com/photo-1600267165910-2f47d8eecf02",
  },
  {
    id: "soundtrack",
    label: "#soundtrack",
    image: "https://images.unsplash.com/photo-1600267165910-2f47d8eecf02",
  },
];

const FavouriteGen = () => {
  const [selected, setSelected] = useState([]);

  const handleSelection = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <section className="bg-image min-h-screen w-full flex flex-col items-center text-white">
      <IconHeader />

      <h1 className="md:text-4xl text-3xl text-center mt-6 px-2">
        Choose favourite genres
        <span className="text-blue-700"> (at least three)</span>
      </h1>

      <div className="w-full flex flex-col items-center px-8">
        <div className="flex items-center w-full max-w-3xl mx-auto mt-8 p-[2px] rounded-2xl searchbar-container shadow-inner shadow-[#7B7B7B47]">
          <div className="flex-grow rounded-l-2xl">
            <input
              type="text"
              placeholder="Type here..."
              className="w-full bg-transparent text-white placeholder-gray-400 py-2 px-4 outline-none"
            />
          </div>

          <button className="bg-gradient-to-r from-[#1b233dfe] via-[#0942a4e1] via-40% to-[#0C63FF] text-white font-semibold py-2 px-6 rounded-r-2xl border-[1px] searchbar-button">
            Search
          </button>
        </div>
      </div>

      <div className="flex md:w-2/3 w-full justify-center gap-6 flex-wrap py-8">
        {tags.map((tag) => {
          const isSelected = selected.includes(tag.id);
          return (
            <div
              key={tag.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleSelection(tag.id)}
            >
              <div
                className={`relative w-40 h-40 rounded-full overflow-hidden border-2 transition-all duration-300 bg-center bg-cover
            ${
              isSelected
                ? "border-[#2400FF] shadow-[inset_0_0_30px_rgba(36,0,255,0.7),0_0_15px_rgba(36,0,255,0.5)]"
                : "border-gray-700 border-2"
            }`}
                style={{ backgroundImage: `url(${tag.image})` }}
              >
                {isSelected && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#2400FF] rounded-t-full w-20 h-10 flex items-center justify-center shadow-lg z-20">
                    <IoMdCheckmark className="text-white text-3xl" />
                  </div>
                )}
              </div>
              <p className="mt-2 text-white text-sm">{tag.label}</p>
            </div>
          );
        })}
      </div>

      <div className="button-wrapper my-9 shadow-sm shadow-black">
            <button className="custom-button">Continue</button>
          </div>
    </section>
  );
};

export default FavouriteGen;
