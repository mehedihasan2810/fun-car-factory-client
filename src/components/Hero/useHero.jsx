import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHero = () => {
  const heroConRef = useRef();

  useLayoutEffect(() => {
    const boxWidth = window.innerHeight + 100,
      totalWidth = boxWidth * 6,
      time = 70;

    const sliederItems = document.querySelectorAll(".hero-slider > div"),
      dirFromLeft = "+=" + totalWidth;
    const mod = gsap.utils.wrap(0, totalWidth);
    gsap.set(sliederItems, {
      x: (i) => i * boxWidth,
    });

    const sliederItems2 = document.querySelectorAll(".hero-slider-2 > div");
    const dirFromRight = "-=" + totalWidth;
    const mod2 = gsap.utils.wrap(0, -totalWidth);
    gsap.set(sliederItems2, {
      x: (i) => -1 * i * boxWidth,
    });

    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      {
        isDesktop: "(min-width: 800px)",
      },
      () => {
        const tl1 = gsap.timeline().to(sliederItems, {
          x: dirFromLeft,
          modifiers: {
            x: (x) => mod(parseFloat(x)) + "px",
          },
          duration: time,
          ease: "none",
          repeat: -1,
        });
        // slider right to left ends

        const tl2 = gsap.timeline().to(sliederItems2, {
          x: dirFromRight,
          modifiers: {
            x: (x) => mod2(parseFloat(x)) + "px",
          },
          duration: time,
          ease: "none",
          repeat: -1,
        });
        // slider left to right ends

        //  paused hero infinite slider when not in viewport start
        ScrollTrigger.create({
          trigger: heroConRef.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (s) => {
            if (!s.isActive) {
              tl1.pause();
              tl2.pause();
            } else {
              tl1.play();
              tl2.play();
            }
          },
        });
      },
      heroConRef.current
    );

    return () => {
      matchMedia.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const path = document.querySelector(".hero-path");
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power1",
    });
  }, []);

  return {
    heroConRef,
  };
};

export default useHero;
