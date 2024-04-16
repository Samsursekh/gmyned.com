"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";

export function SparklesHeroHeading() {
  return (
    <div className=" w-full bg-[#4831d4] flex flex-col items-center justify-center overflow-hidden rounded-md mt-6">
      <div className=" text-center">
        <h1 className="md:text-5xl px-4 text-4xl lg:text-6xl font-bold text-center text-white relative z-20 block w-full transform hover:rotate-3 transition-transform duration-300 perspective lg:leading-[70px]">
          We help brands Grow Beautifully
        </h1>
        <p className=" text-lg mt-4 text-center text-gray-300 2xl:pr-5 m-auto w-[90%] md:w-[70%] lg:w-[50%] pb-3">
          <span className="font-bold ">Gmynd</span> Empowering you to make
          better software experience and digital services, We truly are
          professional brand maker...
        </p>

        <div className="py-4">
          <Link
            href="/services"
            className="px-6 py-2 font-medium  z-[999] m-auto  mt-4 bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            <span className="">Explore More</span>
          </Link>
        </div>
      </div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#4831d4] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
