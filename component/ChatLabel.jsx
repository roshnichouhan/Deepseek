import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";


const ChatLabel = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer">
      {/* Chat Name */}
      <p className="truncate max-w-[85%] group-hover:text-white">{/* Truncate long text */}
        Chat Name Here
      </p>

      {/* Options Menu */}
      <div className="relative group flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 rounded-lg">
        <Image src={assets.three_dots} alt="Options" className={`w-4 ${openMenu.open ? '' : 'hidden'} group-hover:block`} />

        {/* Tooltip / Dropdown */}
        <div className={`absolute ${openMenu.open ? '' : 'hidden'} -top-6 -right-36 hidden group-hover:flex flex-col bg-gray-700 rounded-xl w-max p-2 z-50`}>
          <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
            <Image src={assets.pencil_icon} alt="Rename" className="w-4" />
            <p>Rename</p>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
            <Image src={assets.delete_icon} alt="Delete" className="w-4" />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLabel;
