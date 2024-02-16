"use client";

import Image from "next/image";
import React, { useState } from "react";
import project1 from "@/Images/featureImages/webdev.jpg";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[60px] lg:pb-[90px] dark:bg-dark bg-[#e8fff9]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#4831d4] mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-[#4831d4] mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-indigo-700 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-700 hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-indigo-700 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-700 hover:text-white"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-indigo-700 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-700 hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-indigo-700 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-700 hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-indigo-700 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-700 hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap">
            <PortfolioCard
              ImageHref={project1}
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={project1}
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={project1}
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={project1}
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={project1}
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={project1}
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 m-auto ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <Image
              src={ImageHref}
              alt="portfolio"
              className={`w-full ${
                !imageError && !imageLoaded && "animate-pulse"
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              height={400}
              width={400}
            />
          </div>

          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-[#4831d4] mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-black mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-[#4831d4] bg-white inline-block rounded-md border border-[#4831d4] border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white hover:bg-[#4831d4]"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
