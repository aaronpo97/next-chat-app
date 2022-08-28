import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import MainChatArea from "../../components/main-chat-area/MainChatArea";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageI from "../../types/MessageI";

const ChatroomId: NextPage = () => {
   const router = useRouter();
   const { id } = router.query;

   const [messages, setMessages] = useState<MessageI[]>([]);
   return (
      <div className="">
         <Head>
            <title>Chat App</title>
         </Head>

         <div className="flex h-screen w-screen">
            <Sidebar />
            <MainChatArea messages={messages} setMessages={setMessages} />
         </div>
      </div>
   );
};
export default ChatroomId;
