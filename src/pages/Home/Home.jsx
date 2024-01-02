import Category from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import NewArival from "../../components/NewArival/NewArival";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import NewCollention from "../../components/NewCollention/NewCollention";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Set page title
  useTitlePerPage("Home");

  // Apply parallax effect on certain elements
  useLayoutEffect(() => {
    // Initialize a gsap matchMedia instance
    const matchMedia = gsap.matchMedia();

    // Add a media query for screens with a minimum width of 800px
    matchMedia.add("(min-width: 800px)", () => {
      // Create a gsap timeline with scrubbing enabled
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
        },
      });

      // Apply parallax effect to each element with the class "parallax"
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

    // Revert the matchMedia instance when the component is unmounted
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
