import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import project1 from "@/Images/project-images/1.png";
import project2 from "@/Images/project-images/2.png";
import project3 from "@/Images/project-images/3.png";
import project4 from "@/Images/project-images/4.png";
import Link from "next/link";
import Image from "next/image";


const ProjectCards = () => {

  return (
    <div className="p-4">
      <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:items-end md:px-8 md:w-[80%] lg:w-[60%] m-auto p-4">
        <h2 className="max-w-5xl text-center text-2xl font-[700] md:text-4xl font-roboto text-[rgb(60,93,225)]">
          We are an Online Consulting Platform for every business industry
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Business"
          subtitle="Website for your business"
          href="#"
          Icon={FiUser}
          backgroundImage={project1}
          alt="business-website"
        />
        <Card
          title="Health"
          subtitle="For healthy body"
          href="#"
          Icon={FiMail}
          backgroundImage={project2}
          alt="Health website"
        />
        <Card
          title="Hotel"
          subtitle="For a special dis"
          href="#"
          Icon={FiUsers}
          backgroundImage={project3}
          alt="Hotel Website"
        />
        <Card
          title="Agency"
          subtitle="A agency website"
          href="#"
          Icon={FiCreditCard}
          backgroundImage={project4}
          alt="Agency website"
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  subtitle,
  href,
  // Icon,
  backgroundImage,
  alt,
}) => {
  return (
    <Link
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <Image
        src={backgroundImage}
        alt={alt}
        className="max-w-84"
        height={400}
        width={400}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[50%] transition-transform duration-300" />

      {/* <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  );
};

export default ProjectCards;
