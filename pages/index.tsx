import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
   return (
      <div className="h-screen flex flex-col items-center bg-base-300 justify-center">
         <div className="flex flex-col items-center">
            <div className="flex flex-col items-center my-12">
               <h1 className="text-6xl mb-6">The Chat App</h1>
               <aside className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </aside>
            </div>

            <div>
               <button className="btn">Sign in with Google</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
