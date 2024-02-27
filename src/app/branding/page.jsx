import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import animationData from "@/Images/all-svg-animations/branding.json";
import React from "react";
import Image from "next/image";
import appDev from "@/Images/app-development-services-images/brand.svg";
import { MdOutlineDone } from "react-icons/md";
import { StickyScrollForEcomDev } from "@/Components/ui/sticky-scroll-for-ecomdev";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Branding() {
  const content = [
    {
      title: "Strategic Brand Analysis",
      description:
        "Our brand identity process begins with a thorough analysis of your brand's essence and market positioning.",
    },
    {
      title: "Data-Driven Marketing Insights",
      description:
        "Harness the power of data to fuel your marketing strategies.",
    },
    {
      title: "Strategic Content Development",
      description:
        "Content is king, and at Gmynd, we understand its strategic importance.",
    },
    {
      title: "Creative Design Solutions",
      description:
        "At Gmynd, we go beyond aesthetics. Our design solutions are crafted with creativity at the core",
    },
  ];
  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Brand Identity
          </h1>
          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            At Gmynd , we understand the power of a compelling brand identity.
            In today's competitive landscape, your brand is more than just a
            logo; it's the essence of your company's personality. We specialize
            in the art and science of creating unique brand identities that
            captivate audiences and leave a lasting impression.
          </p>
          <div className="px-6">
            <LetsConnectButton />
          </div>
        </div>
        <div className=" lg:w-[40%] md:w-full w-full">
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
      {/* second section */}
      <div className="font-roboto  flex-row md:flex px-6 py-3 m-auto items-center justify-center">
        <div className=" md:w-[35%] lg:w-[35%] w-full">
          <Image
            src={appDev}
            alt="App Development"
            width={400}
            height={400}
            priority
            loading="eager"
          />
        </div>
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center text-slate-600">
            Why Choose Gmynd for Professional Brand Identity Services
          </h1>

          <br />
          <p className="text-[14px] font-sans animate-shimmer items-center justify-center font-medium text-slate-400 ">
            A compelling brand identity is the cornerstone of successful
            marketing. At Gmynd, a leading brand identity service provider, we
            create impactful brand identities that resonate with your audience.
            Our experienced team of brand strategists and designers blends
            creativity with strategic insight to craft a brand identity that
            sets you apart.
          </p>

          <div className="mt-3">
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Strategic Brand Analysis</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Creative Design Solutions</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Strategic Content Development</p>
              </div>
            </div>
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Data-Driven Marketing Insights </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second section done*/}

      {/* Third section */}
      <StickyScrollForEcomDev content={content} />
      <WhyChooseUs />
    </section>
  );
}
