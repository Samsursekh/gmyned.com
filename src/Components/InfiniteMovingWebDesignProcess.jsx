"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import creativeIdea from "@/Images/web-design-process-images/idea-creative.svg";
import informationPlanning from "@/Images/web-design-process-images/information-planning.svg";
import performanceOptimise from "@/Images/web-design-process-images/performance-optimise.svg";
import quality from "@/Images/web-design-process-images/quality.svg";
import responsiveLayout from "@/Images/web-design-process-images/responsice-layout.svg";
import strategy from "@/Images/web-design-process-images/strategy.svg";

export function InfiniteMovingWebDesignProcess() {
  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  );
}

const testimonials = [
  {
    imageUrl: strategy,
    name: "Web Strategy",
  },
  {
    imageUrl: informationPlanning,
    name: "Planning & Information Architecture",
  },
  {
    imageUrl: creativeIdea,
    name: "Creative Design",
  },
  {
    imageUrl: responsiveLayout,
    name: "Responsive Development",
  },
  {
    imageUrl: quality,
    name: "Quality Assurance (QA)",
  },
  {
    imageUrl: performanceOptimise,
    name: "Performance & Optimization",
  },
];
