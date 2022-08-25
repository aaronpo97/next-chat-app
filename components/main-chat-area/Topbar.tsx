import React, { FC } from "react";
import Avatar from "../ui/Avatar";

const Topbar: FC = () => {
   return (
      <div className="flex items-center p-5 h-[85px] bg-base-200 w-full">
         <Avatar>
            <span className="text-xl">A</span>
         </Avatar>
         <p className="text-xl">Aaron Po</p>
      </div>
   );
};

export default Topbar;
