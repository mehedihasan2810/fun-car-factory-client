import AOS from "aos";
import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import NewArival from "../../components/NewArival/NewArival";
import Slider from "../../components/Slider/Slider";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  useTitlePerPage("Home");
  return (
    // <div className="center-container">
    <>
      <Hero />
      <Gallery />
      <Category />
      <Slider />
      <NewArival />
      </>
    // </div>
  );
};

export default Home;
