import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Message = ({ role, content }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl text-sm">
      <div className={`flex flex-col w-full ${role === "user" ? "items-end" : "items-start"} mb-4`}>
        <div
          className={`group relative max-w-2xl py-3 rounded-xl ${
            role === "user" ? "bg-[#414158] px-5" : "gap-3 bg-[#2B2B37] p-3"
          }`}
        >
          {/* Tooltip Icons */}
          <div
            className={`opacity-0 group-hover:opacity-100 absolute transition-all pointer-events-none ${
              role === "user" ? "left-16 top-2.5" : "left-9 -bottom-6"
            }`}
          >
            <div className="flex items-center gap-2 opacity-70 pointer-events-auto">
              {role === "user" ? (
                <>
                  <Image src={assets.copy_icon} alt="Copy" className="w-4 cursor-pointer" />
                  <Image src={assets.pencil_icon} alt="Edit" className="w-[18px] cursor-pointer" />
                </>
              ) : (
                <>
                  <Image src={assets.copy_icon} alt="Copy" className="w-4 cursor-pointer" />
                  <Image src={assets.regenerate_icon} alt="Regenerate" className="w-[18px] cursor-pointer" />
                  <Image src={assets.like_icon} alt="Like" className="w-4 cursor-pointer" />
                  <Image src={assets.dislike_icon} alt="Dislike" className="w-4 cursor-pointer" />
                </>
              )}
            </div>
          </div>

          {/* Message Content */}
          {role === "user" ? (
            <span className="text-white">{content}</span>
          ) : (
            <div className="flex items-start gap-3">
              <Image
                src={assets.logo_icon}
                alt="Bot"
                className="w-9 h-9 p-1 border border-white rounded-full"
              />
              <div className="space-y-2 w-full">{content}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
