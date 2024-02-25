"use client";

import React from "react";
import animationData from "@/Images/all-svg-animations/Animation.json";
import animate2 from "@/Images/web-development-services-images/web-dev.json";
import Lottie from "react-lottie";
import { StickyScrollWebdevServices } from "@/Components/StickyScrollWebdevServices";
import { MdOutlineDone } from "react-icons/md";
import WebDevTools from "@/Components/WebDevTools";
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";

export default function WebDevelopmentPage() {
  const animateOption = {
    loop: true,
    autoplay: true,
    animationData: animate2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Make Your Business Identity With Website Development Service
          </h1>

          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
            ut fuga suscipit accusantium veritatis modi provident? Obcaecati,
            deleniti neque.
          </p>
          <LetsConnectButton />
        </div>
        <div className=" lg:w-[40%] md:w-full w-full">
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
      <div className="font-roboto  flex-row md:flex px-6 py-3 m-auto items-center justify-center">
        <div className=" md:w-[35%] lg:w-[35%] w-full">
          <Lottie
            options={animateOption}
            height={100}
            width={100}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="md:w-[60%] lg:w-[60%] w-full ">
          <h2 className="text-3xl font-bold text-[#4831d4] mt-3">
            Professional and customised website development services:
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            corrupti adipisci quis accusamus maxime dolores reprehenderit! Ut
            blanditiis sed soluta veniam reprehenderit, quas dolores quisquam ex
            nostrum voluptate dolore tempora explicabo dignissimos quae animi!
            Asperiores dolores consequuntur, enim facilis voluptas pariatur
            repudiandae officiis consectetur, corporis necessitatibus, odio
            libero ullam eligendi assumenda fugit. In eos tempore architecto
            ipsam similique illo blanditiis.
          </p>
          <div className="mt-3">
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Responsive Website</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Ecommerce Website</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Wordpress Website</p>
              </div>
            </div>
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Web Hosting and Domain Registration </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <StickyScrollWebdevServices />
      </div>
      <WebDevTools />
    </section>
  );
}
