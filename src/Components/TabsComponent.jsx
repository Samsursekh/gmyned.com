"use client";

import Image from "next/image";
import heroImage from "@/Images/heroImage.svg";
import { Tabs } from "./ui/Tabs";

export function TabsComponent() {
  const tabs = [
    {
      title: "Web Strategy",
      value: "Web Strategy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Strategy</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Planning & Information Architecture",
      value: "Planning & Information Architecture",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Planning & Information Architecture</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Creative Design",
      value: "Creative Design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Creative Design</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Responsive Development",
      value: "Responsive Development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Responsive Development</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Quality Assurance (QA)",
      value: "Quality Assurance (QA)",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Quality Assurance (QA)</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Launch & Optimization",
      value: "Launch & Optimization",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Launch & Optimization</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src={heroImage}
      alt="dummy image"
      width="400"
      height="400"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
