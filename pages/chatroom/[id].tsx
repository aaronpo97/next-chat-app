import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import MainChatArea from "../../components/main-chat-area/MainChatArea";
import Sidebar from "../../components/sidebar/Sidebar";

const ChatroomId: NextPage = () => {
   return (
      <div className="">
         <Head>
            <title>Chat App</title>
         </Head>

         <div className="flex h-screen w-screen">
            <Sidebar />
            <MainChatArea />
         </div>
      </div>
   );
};
export default ChatroomId;
