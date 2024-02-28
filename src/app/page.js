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
    <main className="relative font-roboto">
      <div
        className="items-center w-full grid-cols-2 mx-auto lg:grid md:py-10 lg:py-8 xl:py-5 bg-[#4831D4] h-[100vh]"
        data-aos="fade-right"
        data-aos-duration="800"
      >
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
