import React from "react";
import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import animationData from "@/Images/all-svg-animations/seo.json";
import appDev from "@/Images/app-development-services-images/seo.svg";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";
import { StickyScrollForEcomDev } from "@/Components/ui/sticky-scroll-for-ecomdev";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function SEO() {
  const content = [
    {
      title: "SEO Audit",
      description:
        "Keep your users updated with the latest offers or progress of any service through push notification and drive user engagement.",
    },
    {
      title: "Competitor Analysis",
      description:
        "Social integration simplifies the process of signup and also allows the users to share your app / service / product on varied channels. This actively encourages brand promotion.",
    },
    {
      title: "Keyword research",
      description:
        "Integrating a secure payment gateway into the app helps the online shoppers to checkout seamlessly resulting in more conversion for the business.",
    },
    {
      title: "On-Page SEO",
      description:
        "Feedback system integrated into an app helps the users to report bugs, complaints or suggestions. Handling such feedback with care helps to build trust and credibility.",
    },
  ];
  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Choose SEO For Better Website Ranking On Google's First Page
          </h1>
          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            Search Engine Optimization(SEO) is a powerful process that is used
            to optimize a website's overall growth and development in Google's
            search engine result page through technical configuration, content
            relevance and, link popularity. SEO is also one of the greatest
            tools of digital marketing that drives traffic, improves ranking,
            and produces guaranteed ROI for your business.
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
            Our SEO Services
          </h1>

          <br />
          <p className="text-[14px] font-sans animate-shimmer items-center justify-center font-medium text-slate-400 ">
            Gmynd has helped hundreds of businesses grow their online customers
            base, and help you too. Our SEO Services experts can craft tactical
            solutions for your brand that are guaranteed to positively affect
            your ROI.
          </p>

          <div className="mt-3">
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Campaign Analysis</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Goal Tracking</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Monthly Performance Report</p>
              </div>
            </div>
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Quarterly Review </p>
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
