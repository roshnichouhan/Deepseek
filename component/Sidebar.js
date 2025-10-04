import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets';
import {useClerk,UserButton} from '@clerk/nextjs';
import { useAppContext } from '@/context/AppContext';
import ChatLabel from './ChatLabel';
import { useState } from 'react';

export const Sidebar = ({ expand, setExpand }) => {

  const{openSignIn} = useClerk();
  const {user} = useAppContext();
  const[openMenu,setOpenMenu] = useState({id : 0,open : false});


  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:h-screen 
        ${expand ? 'p-4 w-64' : 'md:w-20 w-0 max-md:overflow-hidden'}`}
    >
      {/* Top Section */}
      <div>
        {/* Logo + Toggle */}
        <div className={`flex ${expand ? 'flex-row gap-10' : 'flex-col items-center gap-8'}`}>
          <Image
            src={expand ? assets.logo_text : assets.logo_icon}
            alt="App Logo"
            width={expand ? 144 : 40}
            height={40}
            className={expand ? 'w-36 h-auto' : 'w-10 h-auto'}
            priority
          />

          {/* Toggle */}
          <div
            onClick={() => setExpand(!expand)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 rounded-lg cursor-pointer"
          >
            <Image src={assets.menu_icon} alt="Menu" width={24} height={24} className="md:hidden" />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt="Sidebar Toggle"
              width={24}
              height={24}
              className="hidden md:block w-7"
            />

            {/* Tooltip */}
            <div
              className={`absolute bottom-full mb-2 px-2 py-1 rounded text-xs bg-black text-white 
                opacity-0 group-hover:opacity-100 transition-opacity
                ${expand ? 'left-1/2 -translate-x-1/2' : 'left-full ml-2'}`}
            >
              {expand ? 'Close sidebar' : 'Open sidebar'}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 
                  ${expand ? 'left-1/2 -top-1.5 -translate-x-1/2' : 'left-4 bottom-1.5'}`}
              ></div>
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <button
          className={`mt-8 flex items-center justify-center cursor-pointer relative
            ${expand ? 'bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max' : 'group h-9 w-8 mx-auto hover:bg-gray-500/30 rounded-lg'}`}
        >
          <Image
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt="Chat Icon"
            width={28}
            height={28}
            className={`mt-1 ${expand ? 'w-6' : 'w-7'}`}
          />
          {!expand && (
            <div className="absolute -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
              New chat
              <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
            </div>
          )}
          {expand && <p className="text-white font-medium">New chat</p>}
        </button>

        {/* Recents */}
        <div className={`mt-8 text-white/25 text-sm ${expand ? 'block' : 'hidden'}`}>
          <p className="my-1">Recents</p>
          <ChatLabel openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4 mt-4">

        {/* Phone Icon + Get App Combined */}
        {expand && (
          <div
            className="relative group flex items-center gap-2 cursor-pointer p-2.5 border border-primary rounded-lg text-white/80 text-sm hover:bg-white/10"
          >
            {/* Phone Icon */}
            <Image
              src={assets.phone_icon}
              alt=""
              width={20}
              height={20}
              className="w-5"
            />

            {/* Get App Text + New Icon */}
            <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20">
              <span className="text-white text-sm">Get App</span>
              <Image src={assets.new_icon} alt="" width={20} height={20} />

              {/* QR Tooltip */}
              <div className="absolute top-0 left-full ml-2 opacity-0 group-hover:opacity-100 transition-all z-50">
                <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
                  <Image src={assets.qrcode} alt="QR Code" width={176} height={176} className="w-44 h-auto" />
                  <p className="mt-1 text-center">Scan to get DeepSeek App</p>
                  <div className="w-3 h-3 absolute bg-black rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Section */}
        <div onClick={ user ? null :openSignIn} className={`flex items-center ${expand ? 'hover:bg-white/10 rounded-lg' : 'justify-center w-full'} gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}>
        {
        }
          user ? <UserButton  /> : 
          <Image src={assets.profile_icon} alt="" className="w-7 " />

          {expand && <span>My Profile</span>}
        </div>

      </div>
    </div>
  )
}
