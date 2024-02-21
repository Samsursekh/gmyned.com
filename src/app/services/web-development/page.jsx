"use client";

import React from "react";
import animationData from "@/app/services/all-svg-animations/Animation.json";
import Lottie from "react-lottie";
import { StickyScrollServicesSingleComponent } from "@/Components/StickyScrollServicesSingleComponent";

export default function WebDevelopmentPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="pt-14">
      <div className=" bg-yellow-300 p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold">
            Best IT Consulting Agency in Kolkata
          </h1>
          <p className="text-xl font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
            ut fuga suscipit accusantium veritatis modi provident? Obcaecati,
            deleniti neque.
          </p>
          <button className="inline-flex font-roboto h-12 my-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Let's Connect
          </button>
        </div>
        <div className=" lg:w-[40%] md:w-full w-full">
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
            style={{width: "auto", height: "auto"}}
          />
        </div>
      </div>
      <div>
        <StickyScrollServicesSingleComponent />
      </div>
    </section>
  );
}
