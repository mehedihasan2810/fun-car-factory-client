import Category from "../../components/Category/Category";
// import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import NewArival from "../../components/NewArival/NewArival";
// import Slider from "../../components/Slider/Slider";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import NewCollention from "../../components/NewCollention/NewCollention";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useTitlePerPage("Home");

  useLayoutEffect(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(min-width: 800px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
        },
      });

      gsap.utils.toArray(".parallax").forEach((layer) => {
        const depth = layer.dataset.depth;
        tl.fromTo(
          layer,
          { yPercent: -depth, ease: "none" },
          {
            yPercent: depth,
            ease: "none",
          },
          0
        );
      });

      // gsap.fromTo(
      //   ".parallax",
      //   { yPercent: -50, ease: "none" },
      //   {
      //     yPercent: 50,
      //     ease: "none",
      //     scrollTrigger: {
      //       scrub: true,
      //     },
      //   }
      // );
    });

    return () => {
      matchMedia.revert();
    };
  }, []);

  return (
    // <div className="center-container">
    <>
      <Hero />
      <NewCollention />
      <NewArival />
      <Category />
      {/* <Gallery /> */}
      {/* <Carousel/> */}
      {/* <Slider /> */}
    </>
    // </div>
  );
};

export default Home;
