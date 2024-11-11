"use client";

import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";

export const SplineWrapper = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return isDesktop ? (
    <Spline
      scene="https://prod.spline.design/EnrrqgBMC0Dgrjos/scene.splinecode"
      className="absolute inset-0 size-full"
    />
  ) : null;
};
