import { Link } from "react-router-dom";
import "./Hero.css";
import useHero from "./useHero";
const Hero = () => {
  const { heroConRef } = useHero();

  return (
    <section ref={heroConRef} className="hero-container">
      <div className="hero-layer-contaner">
        <img className="mobile-hero-img" src="/assets/banner-photo.png"></img>
        <div className="hero-info">
          <h1>
            Get The{" "}
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
          <Link to="#" className="btn-primary">
            Get Now
          </Link>
        </div>
      </div>
      <div className="hero-scene">
        <div className="hero-slider">
          <div>
            <img
              src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1610018817073-fe06110e6693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1565438525268-adf2e49737e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1616850508698-8cb0c576d5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2038&q=80"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1559816933-0b5b4de2bbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slider-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1610018817073-fe06110e6693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1565438525268-adf2e49737e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1616850508698-8cb0c576d5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2038&q=80"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1559816933-0b5b4de2bbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
