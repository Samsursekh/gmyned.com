"use client";

import React, { useState, useEffect, useMemo } from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ animationData }) {
  const [animation, setAnimation] = useState(animationData);

  useEffect(() => {
    setAnimation(animationData);
  }, [animationData]);

  const options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
      style: "width: 300px; height: 300px;",
    }),
    [animation]
  );

  return (
    <div>
      <Lottie options={options} height={300} width={300} />
    </div>
  );
}
