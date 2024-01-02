import { Link } from "react-router-dom";
import "./Hero.css";
import useHero from "./useHero";
import { heroSlider1, heroSlider2 } from "./data";
const Hero = () => {
  // Custom hook to handle hero section functionality
  const { heroConRef } = useHero();

  return (
    // Hero section container
    <section ref={heroConRef} className="hero-container">
      <div className="hero-layer-contaner">
        {/* Mobile hero image */}
        <img className="mobile-hero-img" src="/assets/banner-photo.png"></img>

        {/* Hero information */}
        <div className="hero-info">
          <h1>
            Get The {/* Highlighted title with SVG underline */}
            <div className="hero-highlight-title">
              Best Toys
              <svg
                viewBox="0 0 543 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="hero-path"
                  d="M0.5 1.5H250L0.5 9.5H250H542.5L299.5 1.5H542.5"
                  stroke="#082f49"
                  strokeWidth="5"
                />
              </svg>
            </div>{" "}
            <br /> For Your Kids
          </h1>

          {/* Button to navigate to all toys */}
          <Link to="/all-toys" className="btn-primary">
            Get Now
          </Link>
        </div>
      </div>

      {/* Hero scene with slider */}
      <div className="hero-scene">
        <div className="hero-slider">
          {heroSlider1.map((item, i) => (
            <div key={i}>
              <img src={item.imgUrl} alt="" aria-hidden />
            </div>
          ))}
        </div>

        {/* Second hero slider */}
        <div className="hero-slider-2">
          {heroSlider2.map((item, i) => (
            <div key={i}>
              <img src={item.imgUrl} alt="" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
