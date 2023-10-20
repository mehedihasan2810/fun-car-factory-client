import Category from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import NewArival from "../../components/NewArival/NewArival";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import NewCollention from "../../components/NewCollention/NewCollention";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

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

  return (
    <>
      <Hero />
      <NewCollention />
      <NewArival />
      <Category />
    </>
  );
};

export default Home;
