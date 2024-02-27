"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffect() {
  const words = [
    {
      text: "We",
    },
    {
      text: "help",
    },
    {
      text: "brands",
    },
    {
      text: "Grow",
    },
    {
      text: "Beautifully",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
