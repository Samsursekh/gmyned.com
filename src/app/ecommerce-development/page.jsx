
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import React from "react";
import animationData from "@/Images/all-svg-animations/Animation.json";
import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";

export default function EcommerceDevelopment() {
  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Android App Development
          </h1>

          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            {/* PERSONALIZED APP SOLUTIONS WITH REFRESHING UI CONCEPTS */}
            Personalized app solutions with refreshing ui concepts
          </p>
        
          <LetsConnectButton />
        </div>
        <div className=" lg:w-[40%] md:w-full w-full">
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
      {/* second section */}
    </section>
  );
}
