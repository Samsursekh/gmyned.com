import React from "react";
import reactJs from "@/Images/web-development-services-images/Tools-Images/reactjs.svg";
import angular from "@/Images/web-development-services-images/Tools-Images/angular.svg";
import bootstrap from "@/Images/web-development-services-images/Tools-Images/bootstrap.svg";
import chakraui from "@/Images/web-development-services-images/Tools-Images/chakraui.svg";
import github from "@/Images/web-development-services-images/Tools-Images/github.svg";
import javascript from "@/Images/web-development-services-images/Tools-Images/javascript.svg";
import materialui from "@/Images/web-development-services-images/Tools-Images/materialui.svg";
import mongodb from "@/Images/web-development-services-images/Tools-Images/mongodb.svg";
import nextjs from "@/Images/web-development-services-images/Tools-Images/nextjs.svg";
import nodejs from "@/Images/web-development-services-images/Tools-Images/nodejs.svg";
import nodemon from "@/Images/web-development-services-images/Tools-Images/nodemon.svg";
import tailwind from "@/Images/web-development-services-images/Tools-Images/tailwind.svg";
import postman from "@/Images/web-development-services-images/Tools-Images/postman.svg";
import vitejs from "@/Images/web-development-services-images/Tools-Images/vitejs.svg";
import vscode from "@/Images/web-development-services-images/Tools-Images/vscode.svg";
import wordpress from "@/Images/web-development-services-images/Tools-Images/wordpress.svg";
import Image from "next/image";

const WebDevTools = () => {
  return (
    <>
      <section className="font-roboto">

        <div className="container px-10 lg:w-[60%] md:w-[70%] w-[90%] m-auto">
            <h2 className="text-3xl text-center my-3 font-bold">Tools & Technologies</h2>
          <div className="grid mt-10 gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            <SingleCard image={reactJs} name="ReactJs" />
            <SingleCard image={nextjs} name="NextJs" />
            <SingleCard image={vitejs} name="ViteJs" />
            <SingleCard image={javascript} name="Vanila JS" />
            <SingleCard image={wordpress} name="Wordpress" />
            <SingleCard image={tailwind} name="Tailwind Css" />
            <SingleCard image={chakraui} name="Chakra UI" />
            <SingleCard image={bootstrap} name="Bootstrap" />

            <SingleCard image={nodemon} name="Nodemon" />
            <SingleCard image={nodejs} name="NodeJs" />
            <SingleCard image={angular} name="Angular JS" />
            <SingleCard image={vscode} name="VS Code" />
            <SingleCard image={materialui} name="MUI" />
            <SingleCard image={postman} name="Postman" />
            <SingleCard image={mongodb} name="MongoDB" />
            <SingleCard image={github} name="Github" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevTools;

const SingleCard = ({ image,name }) => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <Image src={image} alt="ToolsImages" className="w-full" priority  />
        <h3 className="text-center font-bold text-blue-800">{name}</h3>
      </div>
    </>
  );
};
