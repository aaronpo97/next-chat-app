import React, { FC, ReactNode } from "react";

const Avatar: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <div className="avatar placeholder">
         <div className="bg-neutral-focus text-neutral-content rounded-full w-16 mr-3">
            {children}
         </div>
      </div>
   );
};

export default Avatar;
