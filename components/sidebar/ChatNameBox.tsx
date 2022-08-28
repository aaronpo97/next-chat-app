import Link from "next/link";
import React, { FC } from "react";
import Avatar from "../ui/Avatar";

const ChatNameBox: FC = () => {
   const id = Math.random();
   return (
      <Link tabIndex={0} className="flex flex-col" href={`/chats/${id}`}>
         <div className="p-3 flex items-center hover:bg-base-100 hover:cursor-pointer">
            <Avatar>
               <span className="text-xl">A</span>
            </Avatar>
            <div>
               <p className="font-bold">Aaron Po</p>
            </div>
         </div>
      </Link>
   );
};

export default ChatNameBox;
