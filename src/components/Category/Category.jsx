import { useLayoutEffect, useRef } from "react";
import "./Category.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
      rotateX: 10,
      rotateY: 180,
    });

    gsap.to(".carousel", {
      rotateY: 0,
      rotateX: 0,
      scrollTrigger: {
        trigger: ".category-container",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="category-container">
      <div className="category-top">
        <div className="category-title">Categories</div>
        <div className="category-tab-btns">
          {tabBtns.map((item) => (
            <button
              key={item.id}
              onPointerEnter={() => {
                gsap.to(".carousel", {
                  rotateY: item.rotateY,
                  duration: 1.5,
                  ease: "power1.out",
                });
              }}
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
    </div>
  );
};

export default Category;
