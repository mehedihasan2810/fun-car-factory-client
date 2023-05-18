import "./Hero.css";
const Hero = () => {
  return (
      <section className="hero-container">
        <div className="left">
          <h1>
            Get The Best Toys For <br /> Your Kids
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            molestias ea consectetur soluta quisquam ad corrupti fugit nostrum
            amet deleniti!
          </p>
          <button className="btn-primary">Get Toys</button>
        </div>
        <div className="right">
          <img src="/assets/banner-photo.png" alt="" />
        </div>
      </section>
  );
};

export default Hero;
