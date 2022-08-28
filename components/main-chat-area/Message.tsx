import React, { FC } from "react";

const Message: FC<{ content: string; messageId: string; authorId: string }> = ({
   content,
   messageId,
   authorId,
}) => {
   const incomingMessage = Math.random() > 0.5;

   return (
      <div
         className={`w-fit ${
            incomingMessage ? "self-start bg-secondary" : "self-end bg-primary"
         } mx-4 my-1 p-3 rounded-full`}
      >
         <p className={`${incomingMessage ? "text-secondary-content" : "text-primary-content"}`}>
            {content}
         </p>
      </div>
   );
};

export default Message;
