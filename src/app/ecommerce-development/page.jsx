import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import React from "react";
import animationData from "@/Images/all-svg-animations/Animation.json";
import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";
import Image from "next/image";
import ecom from "@/Images/ecommerce-development-services-images/ecom-project.png";
import { MdOutlineDone } from "react-icons/md";

export default function EcommerceDevelopment() {
  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Ecommerce Website Development Company
          </h1>

          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            Smart Features Of Our Online Shopping Mobile App
          </p>

          <LetsConnectButton />
        </div>
        <div className=" lg:w-[40%] md:w-full w-full">
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
      {/* second section */}
      <div className="font-roboto  flex-row md:flex px-6 py-3 m-auto items-center justify-center">
        <div className=" md:w-[35%] lg:w-[35%] w-full">
          <Image
            src={ecom}
            alt="App Development"
            width={400}
            height={400}
            priority
            loading="eager"
          />
        </div>
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center text-slate-600">
            Ecommerce App Development
          </h1>
          <p className="text-[14px] font-sans animate-shimmer items-center justify-center font-medium text-slate-400 ">
            The share of eCommerce is predicted to rise to 73.9% by 2025. Engage
            Gmynd to create mobile apps for online store and offer a seamless
            shopping experience to your customers on-the-go. As a trusted mobile
            app development company, we can customize our turnkey mobile
            applications as per your business niche and ensure that the apps are
            in-sync with your brand aesthetics. Start-ups, SMBs, and large
            enterprises - our interactive eCommerce mobile app can perfectly
            scale according to your business size and requirement.
          </p>
          <br />

          <div className="mt-3">
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Cross-Platform Development</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>App Re-engineering</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>App Customization Services</p>
              </div>
            </div>
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Support & Maintenance </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
