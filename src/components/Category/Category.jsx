import { useLayoutEffect, useRef } from "react";
import "./Category.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Link } from "react-router-dom";
import { carouselData, tabBtns } from "./data";
gsap.registerPlugin(ScrollTrigger, Draggable);

const Category = () => {
  // Refs for accessing DOM elements
  const carouselScene = useRef();
  const carouselCell = useRef();

  // Initialize the scene and carousel layout effect
  useLayoutEffect(() => {
    // Calculate the perspective effect based on the width of the carousel
    const tz = Math.round(
      carouselScene.current.offsetWidth / 2 / Math.tan(Math.PI / 9)
    );

    // Get all carousel cells
    const carouselCells = gsap.utils.toArray(".carousel__cell");

    // Set CSS variables for each carousel cell
    carouselCells.forEach((carouselCell) => {
      carouselCell.style.setProperty("--top", "10px");
      carouselCell.style.setProperty("--left", "10px");
      carouselCell.style.setProperty(
        "--w",
        `${carouselScene.current.offsetWidth - 40}px`
      );
      carouselCell.style.setProperty(
        "--h",
        `${carouselScene.current.offsetHeight - 40}px`
      );
      carouselCell.style.setProperty("--tz", `${tz}px`);
    });

    // Set initial rotation and perspective for the entire carousel
    gsap.set(".carousel", {
      translateZ: -tz,
      rotateY: 0,
    });

    // Animate rotation of the carousel on scroll
    gsap.to(".carousel", {
      rotateY: 160,
      scrollTrigger: {
        trigger: ".scene",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);
  // --------------------------------------------

  // Initialize drag functionality for the carousel layout effect
  useLayoutEffect(() => {
    let isDown = false;
    let startX;
    let rotateY = 0;
    const carousel = document.querySelector(".scene");

    const end = () => {
      isDown = false;
    };

    const start = (e) => {
      isDown = true;
      rotateY = gsap.getProperty(".carousel", "rotateY");
      startX = e.pageX || e.touches[0].pageX;
      gsap.set(".carousel", {
        rotateY: rotateY,
      });
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();

      const x = e.pageX || e.touches[0].pageX;
      const dist = Math.round((x - startX) / 10) + rotateY;

      gsap.to(".carousel", {
        rotateY: dist,
        ease: "power1.out",
      });
    };

    carousel.addEventListener("mousedown", start);
    carousel.addEventListener("touchstart", start);

    carousel.addEventListener("mousemove", move);
    carousel.addEventListener("touchmove", move);

    carousel.addEventListener("mouseleave", end);
    carousel.addEventListener("mouseup", end);
    carousel.addEventListener("touchend", end);

    return () => {
      // Remove event listeners on component cleanup
      carousel.removeEventListener("mousedown", start);
      carousel.removeEventListener("touchstart", start);

      carousel.removeEventListener("mousemove", move);
      carousel.removeEventListener("touchmove", move);

      carousel.removeEventListener("mouseleave", end);
      carousel.removeEventListener("mouseup", end);
      carousel.removeEventListener("touchend", end);
    };
  }, []);

  const handleRotateCarousel = (rotateY) => {
    gsap.to(".carousel", {
      rotateY,
      duration: 1.5,
      ease: "power1.out",
    });
  };

  return (
    <section className="category-container">
      <div className="category-top">
        {/* Category title and tab buttons */}
        <h2 className="category-title">Categories</h2>

        <div className="category-tab-btns">
          {tabBtns.map((item) => (
            <button
              key={item.id}
              onClick={() => handleRotateCarousel(item.rotateY)}
              onPointerEnter={() => handleRotateCarousel(item.rotateY)}
            >
              {item.content}
            </button>
          ))}
        </div>
      </div>
      <div className="category-carousel-container">
        {/* Carousel scene with carousel cells */}
        <div ref={carouselScene} className="scene">
          <div className="carousel">
            {carouselData.map((item) => (
              <div ref={carouselCell} key={item.id} className="carousel__cell">
                {/* Carousel cell content with Link */}
                <img src={item.img} alt="" />
                <div className="carousel-cell-layer">
                  <Link to="/all-toys" aria-label="Visit all toys page">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-6 h-6"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
