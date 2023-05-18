import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="center-container">
      <Hero/>
      <Gallery/>
      <Category/>
    </div>
  );
};

export default Home;
