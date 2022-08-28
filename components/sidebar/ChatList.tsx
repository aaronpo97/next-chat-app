import React, { FC } from "react";
import ChatNameBox from "./ChatNameBox";

const ChatList: FC = () => {
   return (
      <div className="overflow-x-scroll flex flex-col grow">
         {
            // temporary until I get actual users
            Array.from("x".repeat(2)).map(value => {
               return <ChatNameBox key={Math.random()} />;
            })
         }
      </div>
   );
};

export default ChatList;
