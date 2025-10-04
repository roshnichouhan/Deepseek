"use client";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Sidebar } from "@/component/Sidebar";
import PromptBox from "@/component/PromptBox";
import Message from "@/component/Message";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand}/>
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          {/* Mobile menu */}
          <div className="md:hidden absolute px-4 top-6 flex items-center gap-3">
            {/* Menu button */}
            <Image
              src={assets.menu_icon}
              alt="Menu"
              
              onClick={() => setExpand(!expand)}
              className="cursor-pointer"
            />

            {/* Rotated menu icon */}
            <Image
              src={assets.menu_icon}
              alt="Menu Rotated"
             
              className="rotate-180 opacity-80"
            />

            {/* Chat icon */}
            <Image
              src={assets.chat_icon}
              alt="Chat"
             
              className="opacity-70"
            />
          </div>
          {message.length == 0 ? (
            <>
            <div className="flex items-center gap-2 ">
              <Image src={assets.logo_icon} alt=""  className="h-16"/>
              <p className="text-2xl font-medium "> Hi , I'm DeepSeek</p>
            </div>
            <p className="text-sm mt-1">How can I help you today?</p>
            </>
          ):
        (<div> <Message role="user" content={'what is next js'}/> </div>

        )
      }
      <PromptBox isLoading={isLoading} setIsLoading={isLoading} />
      <p className="text-xs absolute bottom-4 text-gray-500">AI-generated,for referce only</p>
        </div>
      </div>
    </div>
  );
}
