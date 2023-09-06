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
          { yPercent: -15 },
          {
            yPercent: 15,
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
          src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
