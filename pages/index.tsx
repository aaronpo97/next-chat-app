import { AuthError, UserCredential } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import React, { FC } from "react";

import { FaGoogle } from "react-icons/fa";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

import Link from "next/link";
import MainChatArea from "../components/main-chat-area/MainChatArea";
import Sidebar from "../components/sidebar/Sidebar";

const Home: NextPage = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const onLoginClick = async () => {
      await signInWithGoogle(undefined, { prompt: "select_account" });
   };

   return (
      <>
         {user && (
            <div className="">
               <Head>
                  <title>Chat App</title>
               </Head>

               <div className="flex h-screen w-screen">
                  <Sidebar />
               </div>
            </div>
         )}
         {!user && (
            <div className="flex h-screen w-screen items-center justify-center">
               <button
                  className="btn gap-2"
                  onClick={onLoginClick}
                  aria-label="Sign in with Google"
               >
                  <FaGoogle />
                  Sign in with Google
               </button>
            </div>
         )}
      </>
   );
};

export default Home;
