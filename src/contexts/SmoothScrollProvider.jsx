import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

// SmoothScrollProvider component for providing smooth scrolling functionality
const SmoothScrollProvider = ({ children }) => {
  // UseLayoutEffect for setting up smooth scrolling and updating ScrollTrigger
  useLayoutEffect(() => {
    // Update ScrollTrigger on Lenis scroll event
    lenis.on("scroll", ScrollTrigger.update);

    // Function to tick on each frame for Lenis RAF (Request Animation Frame)
    function tick(time) {
      lenis.raf(time * 1000);
    }

    // Add the tick function to GSAP ticker
    gsap.ticker.add(tick);

    // Set lag smoothing for the ticker
    gsap.ticker.lagSmoothing(0);

    // Clean up on component unmount
    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  // Provide the smooth scrolling to the children components
  return children;
};

export default SmoothScrollProvider;
