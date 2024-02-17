'use client';

import React from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import google from "@/Images/company-logos/google.png";
import amazon from "@/Images/company-logos/amazon.png";
import blackRock from "@/Images/company-logos/black-rock.png";
import consensis from "@/Images/company-logos/consensis.png";
import bloomb from "@/Images/company-logos/bloomb.png";
import fb from "@/Images/company-logos/fb.png";
import micros from "@/Images/company-logos/micros.png";
import nbc from "@/Images/company-logos/nbc.png";
import morgan from "@/Images/company-logos/morgan.png";
import simon from "@/Images/company-logos/simon.png";
import twoSigma from "@/Images/company-logos/two-sigma.png";

const LogoSlider = () => {
  const logos = [
    morgan,
    blackRock,
    consensis,
    amazon,
    bloomb,
    fb,
    micros,
    nbc,
    google,
    simon,
    twoSigma,
  ];
  const logos2 = [
    bloomb,
    consensis,
    blackRock,
    fb,
    nbc,
    amazon,
    micros,
    google,
    simon,
    twoSigma,
    morgan,
  ];

  return (
    <section className="py-10 w-[90%] m-auto">
      <Slider
        className="w-[160px] md:w-[200px] lg:w-[250px]"
        duration={200}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor="black"
      >
        {logos.map((logo, index) => (
          <Slider.Slide
            key={index}
            className="border-gray-400 py-2 flex items-center justify-center mx-1 shadow-md mb-2"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-32 md:w-36 lg:w-40"
              height={100}
              width={100}
            />
          </Slider.Slide>
        ))}
      </Slider>
      <div className="mt-4">
        <Slider
          className="w-[160px] md:w-[200px] lg:w-[250px]"
          duration={200}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor="black"
        >
          {logos2.map((logo, index) => (
            <Slider.Slide
              key={index}
              className=" border-gray-400 py-2 flex items-center justify-center mx-1 shadow-md my-2"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-32 md:w-36 lg:w-40"
                height={100}
                width={100}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
