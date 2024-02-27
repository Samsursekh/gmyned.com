import LetsConnectButton from "@/utils/LetsConnectButton/LetsConnectButton";
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";
import React from "react";
import animationData from "@/Images/all-svg-animations/digital-marketing.json";
import appDev from "@/Images/app-development-services-images/app-dev.jpg";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";
import { StickyScrollForEcomDev } from "@/Components/ui/sticky-scroll-for-ecomdev";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function DigitalMarketing() {
  const content = [
    {
      title: "User First Strategy - UI/UX",
      description:
        "We consider the needs and preferences of the users while planning an app development strategy. If they find your app easy to operate, its popularity will grow and it’ll cut through the competition.",
    },
    {
      title: "Adaptability - Screen Sizes & Devices",
      description:
        "We build the interface of application adaptable to variations. We make sure that the text is readable and the navigation fits within the screen for a wide range of makes and models.",
    },
    {
      title: "Minimize Action Sequences",
      description:
        "Reducing the number of actions in an app effectively helps the users to accomplish a task quickly. Hence, we do the needful to simplify the user journey in the app.",
    },
    {
      title: "Security",
      description:
        "Our mobile app makers implement all the safety measures to protect sensitive data shared by the users. Further, we disclose the purpose of collecting every data to make the users feel comfortable using the app.",
    },
    {
      title: "Brand Focused",
      description:
        "Top mobile app development services are always tailored as per your requirement. We research your business extensively before starting the development process.",
    },
    {
      title: "Marketing & Promotion",
      description:
        "Our app store optimization services help your application to stand out from the crowd in the app market of the iOS and Android platforms.",
    },
  ];
  return (
    <section className="pt-14">
      <div className=" bg-black p-10 flex-row md:flex md:justify-between justify-center items-center">
        <div className=" lg:w-[60%] md:w-full w-full pl-3">
          <h1 className="text-4xl py-4 font-roboto font-bold animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-r-full px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Digital Marketing Services
          </h1>
          <p className="text-xl font-sans animate-shimmer items-center justify-center px-6 font-medium text-slate-400 ">
            Echoing your brand loudly in the vertual marketing ecosystem.
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
            One Of The Top Digital Marketing Services In Kolkata
          </h1>

          <br />
          <p className="text-[14px] font-sans animate-shimmer items-center justify-center font-medium text-slate-400 ">
            Gmynd stands out as one of the top digital marketing services in
            Kolkata, offering a comprehensive suite of solutions to elevate your
            online presence. With a proven track record, we combines innovation
            and expertise to deliver results-driven strategies that propel
            businesses forward. As a leading player in the digital realm, our
            adept team crafts tailored campaigns, ensuring maximum impact and
            visibility. Trust Gmynd for cutting-edge solutions that define
            excellence in the realm of digital marketing services in Kolkata.
            Elevate your brand with the assurance of best strategies tailored
            just for you.
          </p>

          <div className="mt-3">
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Push Notifications</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Social Media Integration</p>
              </div>
            </div>

            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>Payment Gateway Integration</p>
              </div>
            </div>
            <div className=" flex text-left w-auto">
              <MdOutlineDone color="blue" size={30} />
              <div>
                <p>User Feedback </p>
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
