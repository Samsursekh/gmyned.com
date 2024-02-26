import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

import crm from "@/Images/web-development-services-images/crm.jpg";
import hosting from "@/Images/web-development-services-images/hosting.svg";
import paymentGetway from "@/Images/web-development-services-images/payment-getway.jpg";
import ssl from "@/Images/web-development-services-images/ssl.jpg";
import webContent from "@/Images/web-development-services-images/web-content.jpg";
import responsiveLayout from "@/Images/web-development-services-images/responsive-layout.svg";

export const StickyScrollForWebDev = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content?.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const imageArray = [
    hosting,
    responsiveLayout,
    webContent,
    crm,
    paymentGetway,
    ssl,
  ];

  return (
    <motion.div
      className="h-[30rem] overflow-auto w-full flex justify-evenly relative font-roboto font-bold"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content?.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-[#31d436]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-[#4831d4] max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden">
        <Image
          src={imageArray[activeCard % imageArray.length]}
          alt="image"
          priority
          width={400}
          height={400}
        />
      </motion.div>
    </motion.div>
  );
};
