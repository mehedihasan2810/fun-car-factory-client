import { useLayoutEffect } from "react";
import "./Hero.css";
import { gsap } from "gsap";
const Hero = () => {
  useLayoutEffect(() => {
    console.clear();

    // gsap.set('.hero-slider',{xPercent:-50})

    var boxWidth = 800,
      totalWidth = boxWidth * 6, // * n of boxes + diff textBox
      time = 40,
      sliederItems = document.querySelectorAll(".hero-slider > div"),
      dirFromLeft = "+=" + totalWidth,
      dirFromRight = "-=" + totalWidth;

    var mod = gsap.utils.wrap(0, totalWidth);

    gsap.set(sliederItems, {
      x: (i) => i * boxWidth,
    });

    var action = gsap.timeline().to(sliederItems, {
      x: dirFromLeft,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + "px",
      },
      duration: time,
      ease: "none",
      repeat: -1,
    });
  }, []);

  useLayoutEffect(() => {
    console.clear();

    // gsap.set('.hero-slider',{xPercent:-50})

    var boxWidth = 800,
      totalWidth = boxWidth * 6, // * n of boxes + diff textBox
      time = 40,
      sliederItems = document.querySelectorAll(".hero-slider-2 > div"),
      dirFromLeft = "+=" + totalWidth,
      dirFromRight = "-=" + totalWidth;

    var mod = gsap.utils.wrap(0, -totalWidth);

    gsap.set(sliederItems, {
      x: (i) => -1 *  i * boxWidth,
    });

    var action = gsap.timeline().to(sliederItems, {
      x: dirFromRight,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + "px",
      },
      duration: time,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section data-aos="fade-up" className="hero-container">
      {/* <div className="left">
        <h1>
          Get The Best Toys <br /> For Your Kids
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          molestias ea consectetur soluta quisquam ad corrupti fugit nostrum
          amet deleniti!
        </p>
        <button className="btn-primary">Get Toys</button>
      </div> */}
      <div className="right">
        <div className="hero-imgs-container">
          <div className="hero-scene">
            <div className="hero-slider">


            <div>
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>

            
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559940033-a887678af2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=942&q=80"
                  alt=""
                />
              </div>
            
          





              <div>
                <img
                  src="https://images.unsplash.com/photo-1640297040348-8391b9f88bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt=""
                />
              </div>


              
             

              

            








            </div>







            <div className="hero-slider-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559940033-a887678af2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=942&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1640297040348-8391b9f88bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <img src="/assets/banner-photo.png" alt="" /> */}
      </div>
    </section>
  );
};

export default Hero;
