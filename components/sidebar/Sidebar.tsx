import React, { FC } from "react";
import Avatar from "../ui/Avatar";
import ChatList from "./ChatList";

const Sidebar: FC = () => {
   return (
      <div className="w-[400px] bg-base-300 h-full flex flex-col ">
         <div className="flex h-[85px] w-full items-center  p-3 justify-between">
            <div className="flex items-center">
               <Avatar>
                  <span className="text-xl">A</span>
               </Avatar>
               <p className="font-semibold text-xl">Jimmy Doe</p>
            </div>
            <button type="button" className="btn rounded-full">
               Logout
            </button>
         </div>
         <div className="flex flex-col items-center w-full">
            <button type="button" className="btn rounded-full w-[90%] m-4">
               Start a new chat
            </button>
         </div>
         <ChatList />
      </div>
   );
};
export default Sidebar;
