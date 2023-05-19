import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import NewArival from "../../components/NewArival/NewArival";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="center-container">
      <Hero/>
      <Gallery/>
      <Category/>
      <Slider/>
      <NewArival/>
    </div>
  );
};

export default Home;
