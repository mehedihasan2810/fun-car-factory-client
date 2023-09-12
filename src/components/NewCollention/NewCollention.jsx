import { Link } from "react-router-dom";
import "./NewCollention.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
const NewCollention = () => {
  const newCollentionRef = useRef();

  useLayoutEffect(() => {
    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      () => {
        gsap.fromTo(
          newCollentionRef.current,
          { yPercent: -25 },
          {
            yPercent: 25,
            scrollTrigger: {
              scrub: 0.5,
            },
          }
        );
      },
      newCollentionRef.current
    );

    return () => {
      matchMedia.revert();
    };
  }, []);

  return (
    <div ref={newCollentionRef} className="new-collection-container">
      <div className="new-collection-images-container">
        <img
          src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1519283053578-3efb9d2e71bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>

      <div className="new-collection-info-container">
        <p>New Collection</p>
        <h4>
          Brand New Toys <br /> Just Arrived
        </h4>
        {/* <>Brand New Toys Just Arrived</> */}
        <Link to="#" className="btn-primary">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default NewCollention;
