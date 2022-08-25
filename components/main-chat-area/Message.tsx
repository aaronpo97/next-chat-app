import React, { FC } from "react";

const Message: FC<{ incomingMessage: boolean; content: string }> = ({
   incomingMessage = false,
   content,
}) => {
   return (
      <div
         className={`w-fit ${
            incomingMessage ? "self-start bg-gray-500" : "self-end bg-blue-900"
         } mx-4 my-1 p-3 rounded-full`}
      >
         <p>{content}</p>
      </div>
   );
};

export default Message;
