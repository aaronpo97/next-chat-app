import React, { FC, useEffect, useState } from "react";

const MessageInput: FC = () => {
   const [message, setMessage] = useState("");
   useEffect(() => {
      console.log(message);
   }, [message]);
   return (
      <div className="p-3 bg-base-200">
         <form onSubmit={() => {}} className="flex items-center">
            <textarea
               className="textarea resize-none form-control w-full"
               placeholder="Your message"
               value={message}
               cols={44}
               onChange={e => setMessage(e.target.value)}
            ></textarea>
            <button className="btn rounded-full ml-2">Send message</button>
         </form>
      </div>
   );
};
export default MessageInput;
