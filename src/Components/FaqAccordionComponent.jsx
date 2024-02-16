"use client";

import React, { useState } from "react";

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg p-4 bg-blue-100 shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-blue-200 text-blue-600">
          <svg
            className={`fill-blue-600 stroke-blue-600 duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-blue-600">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color text-left">
          {text}
        </p>
      </div>
    </div>
  );
};

const FaqAccordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-blue-200 px-4 pt-4 ">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What types of software can your company develop?"
              text="We specialize in custom software development, including web applications, desktop software, and mobile applications for iOS and Android."
            />
            <AccordionItem
              header="What web development technologies do you use?"
              text="We leverage a variety of technologies, including HTML, CSS, JavaScript, and popular frameworks such as React, Angular, or Vue.js. as well as we use some of the well known CMS like Wordpress, Wix."
            />
            <AccordionItem
              header="How can digital marketing benefit my business?"
              text="Digital marketing enhances brand visibility, drives targeted traffic, and increases customer engagement. It includes services like SEO, social media marketing, and online advertising."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What graphic design services do you offer?"
              text="Our graphic design services cover a wide range, including logo design, branding, marketing collateral, and user interface (UI) design."
            />
            <AccordionItem
              header="What types of software can your company develop?"
              text="We specialize in custom software development, including web applications, desktop software, and mobile applications for iOS and Android."
            />
            <AccordionItem
              header="What web development technologies do you use?"
              text="We leverage a variety of technologies, including HTML, CSS, JavaScript, and popular frameworks such as React, Angular, or Vue.js. as well as we use some of the well known CMS like Wordpress, Wix."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="#e9f5f9"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#5D3FD3" stopOpacity="0" />
              <stop offset="1" stopColor="#5D3FD3" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FaqAccordion;
