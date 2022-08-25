import React, { FC } from "react";
import MessageInput from "./MessageInput";
import Topbar from "./Topbar";
import Message from "./Message";

const MainChatArea: FC = () => {
   return (
      <div className="w-9/12 flex grow flex-col justify-between">
         <Topbar />
         <div className="h-[80%] w-full flex flex-col overflow-x-scroll">
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
            <Message content="fdskljafkl;sdja" incomingMessage={false} />
         </div>
         <MessageInput />
      </div>
   );
};
export default MainChatArea;
