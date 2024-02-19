import aboutImage from "@/Images/aboutPage.svg";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="sm:flex mt-14 items-center justify-evenly max-w-screen-xl m-auto py-6">
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
          <div className="image object-center text-center">
            <Image
              src={aboutImage}
              alt="About Us"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-4 text-lg font-semibold text-[#4831d4]">
              Why Choose Us
            </span>
            <h2 className="mb-5 text-3xl font-bold  sm:text-[40px]/[48px]">
              Make your customers happy by giving services.
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#4831d4] hover:bg-opacity-90"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
