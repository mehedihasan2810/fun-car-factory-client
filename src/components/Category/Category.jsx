import { useLayoutEffect, useRef } from "react";
import "./Category.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

const carouselData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6139416/pexels-photo-6139416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/69359/pexels-photo-69359.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/2320208/pexels-photo-2320208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/163836/vw-bulli-meadow-peace-163836.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/102984/pexels-photo-102984.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/2527939/pexels-photo-2527939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const tabBtns = [
  {
    id: 1,
    content: "Truck",
    rotateY: 280,
  },
  {
    id: 2,
    content: "Ferrari",
    rotateY: 80,
  },
  {
    id: 3,
    content: "Taxi",
    rotateY: 240,
  },
  {
    id: 4,
    content: "Bus",
    rotateY: 160,
  },
];

const Category = () => {
  const carouselScene = useRef();
  const carouselCell = useRef();

  useLayoutEffect(() => {
    const tz = Math.round(
      carouselScene.current.offsetWidth / 2 / Math.tan(Math.PI / 9)
    );

    const carouselCells = gsap.utils.toArray(".carousel__cell");

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

    gsap.set(".carousel", {
      translateZ: -tz,
      rotateY: 0,
    });

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
      {/* <div className="category-left-gradient">
        <div></div>
        <div></div>    
      </div> */}
      <div className="category-top">
        <div className="category-title" data-speed="100">
          Categories
        </div>
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
        <div ref={carouselScene} className="scene">
          <div className="carousel">
            {carouselData.map((item) => (
              <div ref={carouselCell} key={item.id} className="carousel__cell">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
