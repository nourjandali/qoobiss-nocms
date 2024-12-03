// LottieAnimation.js
import React from "react";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

const LottieAnimation = ({
  animationData,
  width = "100%",
  height = "100%",
  loop = true,
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerRef.current && !animationRef.current && isVisible) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: loop,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [animationData, loop, isVisible]);

  return (
    <div
      ref={containerRef}
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default LottieAnimation;
