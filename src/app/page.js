import Image from "next/image";
import heroImage from "@/Images/heroImage.svg";
import LogoSlider from "@/Components/logoSlider/LogoSlider";
import ProjectCards from "@/Components/ProjectCards";
import ServicesComponent from "@/Components/ServicesComponent";
import ClientsTestimonials from "@/Components/ClientsTestimonials";
import CTA from "@/Components/CTA";
import FaqAccordion from "@/Components/FaqAccordionComponent";
import { Lamp } from "@/Components/Lamp";
import { SparklesHeroHeading } from "@/Components/SparklesHeroHeading";

export default function Home() {
  return (
    <main className="relative">
      <div
        className="items-center w-full grid-cols-2 mx-auto lg:grid md:py-10 lg:py-8 xl:py-5 bg-[#4831D4] h-[100vh]"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        {/* <div className="pr-2 md:mb-6 py-14 md:py-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-white xl:text-6xl lg:text-5xl p-6">
            <span className="font-League block w-full font-bold text-center transform hover:rotate-3 transition-transform duration-300 perspective lg:leading-[70px]">
              We help brands Grow Beautifully
            </span>
          </h1>
          <p className=" text-lg text-center text-gray-300 2xl:pr-5 m-auto w-[90%] md:w-[70%] lg:w-[50%] pb-3">
            <span className="font-bold ">Gmynd</span> Empowering you to make
            better software experience and digital services, We truly are
            professional brand maker...
          </p>

          <div className="mt-2 text-center">
            <Link
              href="/services"
              className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              <span className="">Explore More</span>
            </Link>
          </div>
        </div> */}
        <div className="pt-20 bg-[#4831d4]">
          <SparklesHeroHeading />
        </div>

        <div className=" overflow-hidden ">
          <Image
            className="transition-all duration-300 ease-in-out hover:scale-105 mx-auto w-full max-w-[80%] sm:pb-12 lg:pb-0"
            src={heroImage}
            alt="hero image"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
      <section>
        <LogoSlider />
      </section>
      <section>
        <ProjectCards />
      </section>
      <section>
        <ServicesComponent />
      </section>
      <section>
        <CTA />
      </section>
      <section>
        <ClientsTestimonials />
      </section>
      <section>
        <FaqAccordion />
      </section>
      <section>
        <Lamp />
      </section>
    </main>
  );
}
