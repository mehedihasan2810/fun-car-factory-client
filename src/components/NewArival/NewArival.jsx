import { useLayoutEffect, useRef } from "react";
import "./NewArival.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NewArival = () => {
  const newArrivalConRef = useRef();
  const videoRef = useRef();

  useLayoutEffect(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      () => {
        ScrollTrigger.create({
          trigger: videoRef.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (s) => {
            if (!s.isActive) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          },
        });
      },
      newArrivalConRef.current
    );
  }, []);

  return (
    <section ref={newArrivalConRef} className="new-arrival-container">
      <video
        ref={videoRef}
        src="/videos/kids-playing.mp4"
        autoPlay
        loop
        muted
        className="new-arrival-video"
      ></video>

      <div className="new-arrival-text-container">
        <h2 className="parallax" data-speed="50">
          Putting A Smile <br /> On Kid&#39;s Faces
        </h2>
      </div>
    </section>
  );
};

export default NewArival;
