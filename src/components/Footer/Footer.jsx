import "./Footer.css";
const Footer = () => {
  return (
    <div data-aos="fade-up" className="center-container">
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Truck Toys</span>
            <span>Ferrari Toys</span>
            <span>Volvo Toys</span>
            <span>BMW Toys</span>
            <span>Best Rated</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stories</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
              eos vitae blanditiis neque molestias itaque sequi, voluptatem
              voluptatum, error placeat magni? Rerum mollitia dignissimos quo
              magnam culpa quasi maiores.
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              minus dolore tempora beatae modi sequi eligendi delectus, ea sed
              voluptate itaque similique quos doloremque quam aut numquam
              maxime. Officiis, atque.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">FunCarFactory</span>
            <span className="copyright">
              Copyright 2023. All Rights Reserved
            </span>
          </div>
          {/* <div className="right">
        <img src="./images/payment-gateway.png" alt="payment gateway" />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
