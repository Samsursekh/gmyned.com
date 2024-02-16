import React from "react";
import webdev from "@/Images/all-svg-files/web-development-svgrepo-com.svg";
import appdev from "@/Images/all-svg-files/app-development-end-svgrepo-com.svg";
import keyword from "@/Images/all-svg-files/search-svgrepo-com.svg";
import branding from "@/Images/all-svg-files/social-media-branding-advertising-promotion-svgrepo-com.svg";
import socialmedia from "@/Images/all-svg-files/social-media-campaign-svgrepo-com.svg";
import seo from "@/Images/all-svg-files/seo-tag-search-engine-optimization-svgrepo-com.svg";
import Image from "next/image";

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3  m-auto">
        <div className="mb-9 rounded-[20px] text-center bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary m-auto">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark font-League">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6 font-roboto">
            {details}
          </p>
        </div>
      </div>
    </>
  );
};

const ServicesComponent = () => {
  return (
    <section className=" pt-20 dark:bg-dark lg:pt-[60px] bg-slate-100 w-full m-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-[#4831d4] sm:text-4xl md:text-[40px]">
                What Services We Offer!
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap">
          <ServiceCard
            title="SOCIAL MEDIA MARKETING"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <Image
                src={socialmedia}
                width={500}
                height={500}
                alt="SOCIAL MEDIA MARKETING"
                priority
              />
            }
          />
          <ServiceCard
            title="APPLICATION DEVELOPMENT"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <Image
                src={appdev}
                width={500}
                height={500}
                alt="APPLICATION DEVELOPMENT"
                priority
              />
            }
          />
          <ServiceCard
            title="WEBSITE DEVELOPMENT"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <Image
                src={webdev}
                width={500}
                height={500}
                alt="WEBSITE DEVELOPMENT"
                priority
              />
            }
          />
          <ServiceCard
            title="BRANDING STRATEGY"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <Image
                src={branding}
                width={500}
                height={500}
                alt="BRANDING STRATEGY"
                priority
              />
            }
          />
          <ServiceCard
            title="SEO SERVICES"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <Image
                src={seo}
                width={500}
                height={500}
                alt="SEO SERVICES"
                priority
              />
            }
          />
          <ServiceCard
            title="KEYWORD RESEARCH"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <Image
                src={keyword}
                width={500}
                height={500}
                alt="KEYWORD RESEARCH"
                priority
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
