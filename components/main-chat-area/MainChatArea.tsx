import React, { Dispatch, FC, SetStateAction, useState } from "react";
import MessageInput from "./MessageInput";
import Topbar from "./Topbar";
import Message from "./Message";
import MessageI from "../../types/MessageI";

const MainChatArea: FC<{
   messages: MessageI[];
   setMessages: Dispatch<SetStateAction<MessageI[]>>;
}> = ({ messages, setMessages }) => {
   return (
      <div className="w-9/12 flex grow flex-col justify-between">
         <Topbar />
         <div className="h-[80%] w-full flex flex-col overflow-x-scroll">
            {messages.map(message => {
               return (
                  <Message
                     content={message.content}
                     messageId={message.messageId}
                     authorId={message.authorId}
                     key={Math.random()}
                  />
               );
            })}
         </div>
         <MessageInput messages={messages} setMessages={setMessages} />
      </div>
   );
};
export default MainChatArea;
