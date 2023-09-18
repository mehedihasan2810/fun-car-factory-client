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
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
// const bgColorRef = useRef();




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
        const speed = layer.dataset.speed;
        tl.fromTo(
          layer,
          { yPercent: -speed, ease: "none" },
          {
            yPercent: speed,
            ease: "none",
          },
          0
        );
      });
    });

    return () => {
      matchMedia.revert();
    };
  }, []);

  useLayoutEffect(() => {
    // ScrollTrigger.create({
    //   start: 0,
    //   end: "max",
    //   onUpdate: updateValues,
    // });

    // function updateValues() {
    //   if (ScrollTrigger.isInViewport(".category-container")) {
    //     bgColorRef.current.style.opacity = "1";
    //   } else {
    //     bgColorRef.current.style.opacity = "0";
    //   }
    // }
    // updateValues();
  }, []);

  return (
    <>
      {/* <div ref={bgColorRef} className="bg-color"></div> */}
      <Hero />
      <NewCollention />
      <NewArival />
      <Category />
      {/* <Gallery /> */}
      {/* <Carousel/> */}
      {/* <Slider /> */}
    </>
  );
};

export default Home;
