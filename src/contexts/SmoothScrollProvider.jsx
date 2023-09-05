import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
const lenis = new Lenis();
const SmoothScrollProvider = ({ children }) => {
  useLayoutEffect(() => {
    lenis.on("scroll", ScrollTrigger.update);


    function tick(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(tick);

    gsap.ticker.lagSmoothing(0);


    return () => {
      gsap.ticker.remove(tick);
    }
  }, []);

  return children;
};

export default SmoothScrollProvider;
