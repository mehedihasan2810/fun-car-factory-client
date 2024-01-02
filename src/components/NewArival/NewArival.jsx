import { useLayoutEffect, useRef } from "react";
import "./NewArival.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NewArival = () => {
  // Refs for the section container and video element
  const newArrivalConRef = useRef();
  const videoRef = useRef();

  // Effect to handle video play/pause based on scroll position
  useLayoutEffect(() => {
    // Media query setup
    const matchMedia = gsap.matchMedia();
    matchMedia.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      () => {
        // ScrollTrigger setup for video play/pause
        ScrollTrigger.create({
          trigger: videoRef.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (s) => {
            if (!s.isActive) {
              // Pause the video when not in the viewport
              videoRef.current.pause();
            } else {
              // Play the video when in the viewport
              videoRef.current.play();
            }
          },
        });
      },
      newArrivalConRef.current // Trigger the effect when the section is in the viewport
    );
  }, []);

  return (
    <section ref={newArrivalConRef} className="new-arrival-container">
      {/* Video element */}
      <video
        ref={videoRef}
        src="/videos/kids-playing.mp4"
        autoPlay
        loop
        muted
        className="new-arrival-video"
      ></video>

      {/* Text container with parallax effect */}
      <div className="new-arrival-text-container">
        <h2 className="parallax" data-speed="50">
          Putting A Smile <br /> On Kid&#39;s Faces
        </h2>
      </div>
    </section>
  );
};

export default NewArival;
