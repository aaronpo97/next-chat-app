import React, { FC } from "react";
import Avatar from "../ui/Avatar";

const ChatNameBox: FC = () => {
   return (
      <div className="flex flex-col">
         <div className="p-3 flex items-center hover:bg-base-100 hover:cursor-pointer">
            <Avatar>
               <span className="text-xl">A</span>
            </Avatar>
            <div>
               <p className="font-bold">Aaron Po</p>
            </div>
         </div>
      </div>
   );
};

export default ChatNameBox;
