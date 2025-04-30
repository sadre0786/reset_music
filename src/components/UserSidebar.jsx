import React from 'react'
import { NavLink } from 'react-router-dom';
import IconHeader from './IconHeader';
import { RxDashboard } from "react-icons/rx";
import { FiGlobe, FiSearch, FiMusic, FiPlusCircle, FiHeart } from 'react-icons/fi';

const menuItems = [
  { name: 'home', icon: <RxDashboard />, path: '/' },
  { name: 'browse', icon: <FiGlobe />, path: '/browse' },
  { name: 'search', icon: <FiSearch />, path: '/search' },
  { name: 'library', icon: <FiMusic />, path: '/library' },
  { name: 'create playlist', icon: <FiPlusCircle />, path: '/create-playlist' },
  { name: 'liked songs', icon: <FiHeart />, path: '/liked-songs' },
];

const UserSidebar = () => {
  return (
    <aside className='w-80 min-h-screen bg-[#0E1525] rounded-tr-[50px] rounded-br-[50px]'>
      <IconHeader />

      <div className="w-64 text-white p-4 h-72">
        {menuItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-md mb-1 transition-all 
              ${isActive ? 
                'bg-gradient-to-r from-[#0950D7] via-[#4197C8] to-[#040b1e00] border-l-4 text-white' : 
                'hover:bg-gray-800 text-gray-400'}`
            }
            style={({ isActive }) =>
              isActive
                ? {
                    borderLeft: '3px solid',
                    borderImageSource:
                      'linear-gradient(90deg, #00B2FF 0%, #1D8FFF 50%, #0A0F3C 100%)',
                    borderImageSlice: 1,
                  }
                : {}
            }
          >
            <span className={`text-md ${!item.isActive ? 'text-inherit' : ''}`}>
              {item.icon}
            </span>
            <span className="capitalize text-md">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default UserSidebar;
